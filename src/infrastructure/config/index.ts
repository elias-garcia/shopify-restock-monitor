import { applyDecoder } from "../decoding";
import { Config } from "./config.interface";
import { configDecoder } from "./decoders/config.decoder";

export const config: Config = applyDecoder(process.env, configDecoder);
