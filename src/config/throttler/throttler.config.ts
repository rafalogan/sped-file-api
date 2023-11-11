import { ThrottlerOptions } from '@nestjs/throttler';

export const throttlerOptions = (options?: ThrottlerOptions): ThrottlerOptions => ({
	ttl: Number(process.env.TRHOTTLER_TTL) || 60000,
	limit: Number(process.env.TRHOTTLER_LIMIT) || 100,
	...options,
});
