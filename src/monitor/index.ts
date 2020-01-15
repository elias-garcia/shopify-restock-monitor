import * as database from "./database";

export {
	start,
};

async function start(): Promise<void> {
	await database.connect();

}
