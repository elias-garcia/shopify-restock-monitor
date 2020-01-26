import { Browser, ElementHandle, Page } from "puppeteer";

import { getBrowser } from "../../infrastructure/browser";
import { logger } from "../../infrastructure/logging";
import { ProxyDoc } from "./interfaces/proxy-doc.type";
import { Proxy } from "./interfaces/proxy.interface";
import { PROXIES_LIST_URL } from "./proxies.constants";
import { ProxyModel } from "./proxy.model";

function getInnerTextFromHTMLElement(element: HTMLElement): string {
	return element.innerText;
}

export async function scrapeProxies(): Promise<Proxy[]> {
	const browser: Browser = await getBrowser();
	const page: Page = await browser.newPage();

	logger.info(`Scraping proxies from ${PROXIES_LIST_URL}`);
	await page.goto(PROXIES_LIST_URL);
	await page.waitForSelector("table#tblproxy");

	const tableRowsHandlers: ElementHandle<HTMLElement>[] = await page.$$("table#tblproxy tr.proxy");
	const proxies: Proxy[] = await Promise.all(
		tableRowsHandlers.map(async (tableRowHandler: ElementHandle<HTMLTableRowElement>): Promise<Proxy> => ({
			ip: await tableRowHandler.$eval("td:nth-of-type(2)", getInnerTextFromHTMLElement),
			port: Number(await tableRowHandler.$eval("td:nth-of-type(3)", getInnerTextFromHTMLElement)),
			latency: Number((await tableRowHandler.$eval("td:nth-of-type(8)", getInnerTextFromHTMLElement)).split("ms")[0]),
		}),
		),
	);

	await browser.close();
	logger.info(`Total proxies scraped: ${proxies.length}`);

	return proxies;
}

export async function saveProxies(proxies: Proxy[]): Promise<ProxyDoc[]> {
	return ProxyModel.create(proxies);
}

export async function getRandomProxy(): Promise<ProxyDoc> {
	logger.info(`Retrieving a random proxy from the database`);
	const proxies: ProxyDoc[] = await ProxyModel
		.aggregate([{ $sample: { size: 1 } }]);

	if (proxies.length === 0) {
		throw new Error(`No proxy could have been retrieved from the database`);
	}

	logger.info(`Proxy retrieved successfully: ${proxies[0].ip}:${proxies[0].port}`);

	return proxies[0];
}
