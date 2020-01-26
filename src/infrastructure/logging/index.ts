import * as pino from "pino";

export const logger = pino({
	prettyPrint: {
		colorize: true,
	},
});
