import { Logger } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { MorganInterceptor } from 'nest-morgan';

const logger = new Logger('HTTP Request');
export const stream = { write: (message: string) => logger.log(message.trim()) };
export const format = !process.env.NODE_ENV || process.env.NODE_ENV.toLowerCase().includes('prod') ? 'dev' : 'combined';

export const morganPrvider = {
	provide: APP_INTERCEPTOR,
	useClass: MorganInterceptor(format, { stream }),
};
