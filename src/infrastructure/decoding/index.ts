import Decoder from "jsonous";

export function decode<T>(
	data: unknown,
	decoder: Decoder<T>,
): T {
	const decodingResult = decoder
		.decodeAny(data)
		.cata<T | string>({
			Ok: (decodedData: T) => decodedData,
			Err: (error: string) => error,
		});

	if (typeof decodingResult === "string") {
		throw new Error(decodingResult);
	} else {
		return decodingResult;
	}
}
