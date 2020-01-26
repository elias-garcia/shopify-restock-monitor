import * as mongoose from "mongoose";

import { config } from "../config";
import { logger } from "../logging";

export async function connectToDatabase(): Promise<void> {
	logger.info(`Establishing connection with the database on port ${config.databasePort}`);
	await mongoose.connect(
		`mongodb://${config.databaseHost}:${config.databasePort}/${config.databaseName}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	);
	logger.info("Database connection established");
}
