import { Logger } from '@nestjs/common';
import { isDev } from './utils.hendle';

const enableDebug = process.env.DEBUG === 'true';

export const onLog = (...args: any[]) => {
	if (isDev) return console.log(args[0], ...args);
	return;
};

export const onDebug = (title: string, ...args: any[]) => {
	if (isDev || enableDebug) {
		const logger = new Logger(title);

		return logger.debug(args[0], ...args.slice(1));
	}
};

export const onInfo = (title: string, ...args: any[]) => {
	const logger = new Logger(title);

	return logger.log(args[0], ...args.slice(1));
};

export const onError = (title: string, args: any[]) => {
	const logger = new Logger(title);
	return logger.error(args[0], ...args.slice());
};
