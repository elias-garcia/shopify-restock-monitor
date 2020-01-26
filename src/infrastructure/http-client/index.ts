import axios, { AxiosResponse } from "axios";

import { ProxyDoc } from "../../app/proxies/interfaces/proxy-doc.type";

export async function get<T>(url: string, proxy: ProxyDoc): Promise<AxiosResponse<T>> {
	return axios.get(
		url,
		{
			proxy: {
				host: proxy.ip,
				port: proxy.port,
			},
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}
