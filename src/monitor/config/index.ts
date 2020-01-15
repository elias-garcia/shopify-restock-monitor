import { Config } from "./config.interface";
import { configSchema } from "./config.schema";

export {
	config,
};

const config: Config = configSchema.validateSync(process.env, { stripUnknown: true });
