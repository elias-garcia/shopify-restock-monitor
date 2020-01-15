import * as api from "./monitor";
import { logger } from "./monitor/logging";

(async () => {
	try {
		await api.start();
	} catch (err) {
		// tslint:disable-next-line: no-unsafe-any
		logger.error(err.message);
		process.exit(1);
	}
})();
