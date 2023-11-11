import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { httpsOptions } from './config/https/https-options.confg';
import { baseURL } from './utils';

const logger = new Logger('SPED API');

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { httpsOptions: httpsOptions() });

	await app.listen(Number(process.env.APP_PORT) || 3000);

	logger.log(`app started at ${baseURL()}`);
}
bootstrap();
