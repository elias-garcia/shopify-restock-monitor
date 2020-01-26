export type ProxyProtocol = "http" | "https" | "socks4" | "socks5";

export interface Proxy {
	readonly ip: string;
	readonly port: number;
	readonly latency: number;
}
