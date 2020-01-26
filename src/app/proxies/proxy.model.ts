import { Document, Model, model, Schema } from "mongoose";

import { Proxy } from "./interfaces/proxy.interface";

const proxySchema: Schema<Proxy> = new Schema<Proxy>({
	ip: {
		type: Schema.Types.String,
		required: true,
	},
	port: {
		type: Schema.Types.Number,
		required: true,
	},
	latency: {
		type: Schema.Types.Number,
		required: true,
	},
}, { timestamps: true });

export const ProxyModel: Model<Document & Proxy> = model("Proxy", proxySchema);
