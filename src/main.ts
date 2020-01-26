import * as app from "./app";
import { logger } from "./infrastructure/logging";

(async () => {
	try {
		await app.run();
	} catch (err) {
		// tslint:disable-next-line: no-unsafe-any
		logger.error(err.message);
		process.exit(1);
	}
})();
