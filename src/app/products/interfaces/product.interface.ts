export interface ProductVariant {
	readonly id: number;
	readonly title: string;
	readonly sku: string;
	readonly available: boolean;
	readonly price: string;
	readonly createdAt: string;
	readonly updatedAt: string;
	readonly option: string;
}

export interface ProductImage {
	readonly id: number;
	readonly src: string;
	readonly createdAt: string;
	readonly updatedAt: string;
}

export interface Product {
	readonly id: number;
	readonly title: string;
	readonly handle: string;
	readonly publishedAt: string;
	readonly createdAt: string;
	readonly updatedAt: string;
	readonly images: ProductImage[];
	readonly variants: ProductVariant[];
}
