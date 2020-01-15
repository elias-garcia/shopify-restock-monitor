import * as mongoose from "mongoose";
import { config } from "../config";
import { logger } from "../logging";

export {
	connect,
};

async function connect(): Promise<void> {
	logger.info(`Establishing connection with the database on port ${config.DATABASE_PORT}`);
	await mongoose.connect(
		`mongodb://${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	);
	logger.info("Database connection established");
}
