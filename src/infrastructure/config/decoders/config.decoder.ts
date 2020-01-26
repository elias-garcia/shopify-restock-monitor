import Decoder, { field, number, string, succeed } from "jsonous";

import { Config } from "../config.interface";

export const configDecoder: Decoder<Config> = succeed({})
	.assign("port", field("PORT", number))
	.assign("databaseHost", field("DATABASE_HOST", string))
	.assign("databasePort", field("DATABASE_PORT", number))
	.assign("databaseName", field("DATABASE_NAME", string));
