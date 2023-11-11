import { readFileSync } from 'node:fs';

export const httpsOptions = () => {
	if (process.env.HTTPS_CERT && process.env.HTTPS_KEY) {
		return {
			key: readFileSync(process.env.HTTPS_KEY),
			cert: readFileSync(process.env.HTTPS_CERT),
		};
	}

	return;
};
