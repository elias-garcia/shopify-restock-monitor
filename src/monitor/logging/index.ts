import * as pino from "pino";

export {
	logger,
};

const logger = pino({
	prettyPrint: {
		colorize: true,
	},
});
