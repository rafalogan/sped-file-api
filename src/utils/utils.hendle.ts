export const isProd = process.env.NODE_ENV?.toLowerCase().includes('prod');
export const isDev = !process.env.NODE_ENV || process.env.NODE_ENV?.toLowerCase().includes('dev');
export const isHom = process.env.NODE_ENV?.toLowerCase().includes('hom');

export const baseURL = () => {
	if (process.env.HTTPS_CERT && process.env?.HTTPS_KEY) {
		return `https://localhost:${Number(process.env?.APP_PORT) || 3000}`;
	}

	return `http://localhost:${Number(process.env?.APP_PORT) || 3000}`;
};

export const envOptions = process.env.NODE_ENV?.toLowerCase().includes('test') ? '.env.testing' : '.env';
