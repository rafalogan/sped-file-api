import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { httpsOptions } from './config/https/https-options.confg';
import { baseURL } from './utils';
import { corsOptions } from './config/cors/cors.config';

const logger = new Logger('SPED API');

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { httpsOptions: httpsOptions() });

	app.enableCors(corsOptions());

	await app.listen(Number(process.env.APP_PORT) || 3000);
	logger.log(`app started at ${baseURL()}`);
}
bootstrap();
