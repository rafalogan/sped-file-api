import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsOptions = (options?: CorsOptions): CorsOptions => ({
	origin: process.env.CORS_ORIGIN,
	...options,
});
