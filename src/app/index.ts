import { connectToDatabase } from "../infrastructure/database";
import { getProducts } from "./products";
import { Product } from "./products/interfaces/product.interface";
import { saveProxies, scrapeProxies } from "./proxies";
import { ProxyDoc } from "./proxies/interfaces/proxy-doc.type";
import { Proxy } from "./proxies/interfaces/proxy.interface";

export async function run(): Promise<void> {
	await connectToDatabase();

	const scrapedProxies: Proxy[] = await scrapeProxies();
	const savedProxies: ProxyDoc[] = await saveProxies(scrapedProxies);
}
