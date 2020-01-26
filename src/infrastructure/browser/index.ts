import { Browser, launch } from "puppeteer";

export async function getBrowser(): Promise<Browser> {
	return launch({ headless: true });
}
