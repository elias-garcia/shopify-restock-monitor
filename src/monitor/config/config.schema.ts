import * as yup from "yup";

import { Config } from "./config.interface";

export const configSchema: yup.ObjectSchema<Config> = yup.object().shape({
	PORT: yup.number().required(),
	DATABASE_HOST: yup.string().required(),
	DATABASE_PORT: yup.number().required(),
	DATABASE_NAME: yup.string().required(),
});
