import Decoder, { array, boolean, field, number, string, succeed } from "jsonous";

import { Product, ProductImage, ProductVariant } from "../interfaces/product.interface";

const variantDecoder: Decoder<ProductVariant> = succeed({})
	.assign("id", field("id", number))
	.assign("title", field("title", string))
	.assign("sku", field("sku", string))
	.assign("available", field("available", boolean))
	.assign("price", field("price", string))
	.assign("createdAt", field("created_at", string))
	.assign("updatedAt", field("updated_at", string))
	.assign("option", field("option1", string));

const imageDecoder: Decoder<ProductImage> = succeed({})
	.assign("id", field("id", number))
	.assign("src", field("src", string))
	.assign("createdAt", field("created_at", string))
	.assign("updatedAt", field("updated_at", string));

const productDecoder: Decoder<Product> = succeed({})
	.assign("id", field("id", number))
	.assign("title", field("title", string))
	.assign("handle", field("handle", string))
	.assign("publishedAt", field("published_at", string))
	.assign("createdAt", field("created_at", string))
	.assign("updatedAt", field("updated_at", string))
	.assign("images", field("images", array(imageDecoder)))
	.assign("variants", field("variants", array(variantDecoder)));

export const productsDecoder: Decoder<Product[]> = array(productDecoder);
