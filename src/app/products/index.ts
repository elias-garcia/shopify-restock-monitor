import { applyDecoder } from "../../infrastructure/decoding";
import * as httpClient from "../../infrastructure/http-client";
import { getRandomProxy } from "../proxies";
import { productsDecoder } from "./decoders/product.decoder";
import { Product } from "./interfaces/product.interface";
import { MAX_PROUCTS_LIMIT, MIN_PRODUCTS_LIMIT } from "./products.constants";

// Used together with a random proxy to avoid cache hits
function getRandomProductsLimit(): number {
	const randomNumber = Math.random() * (MAX_PROUCTS_LIMIT - MIN_PRODUCTS_LIMIT + 1);

	return Math.floor(randomNumber) + MIN_PRODUCTS_LIMIT;
}

export async function getProducts(shopName: string): Promise<Product[]> {
	const proxy = await getRandomProxy();
	const productsLimit = getRandomProductsLimit();
	const url = `https://${shopName}/products.json?limit=${productsLimit}`;
	const response = await httpClient.get(url, proxy);

	if (response.status !== 200) {
		throw new Error(`${response.status}: ${response.statusText}`);
	}

	return applyDecoder(response.data, productsDecoder);
}
