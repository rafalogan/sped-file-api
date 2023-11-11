import { Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';

import { MailerModule } from '@nestjs-modules/mailer';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { morganPrvider } from './config/morgan/morgan.confg';
import { mailerOptions } from './config/mailer/mailer.config';
import { throttlerOptions } from './config/throttler/throttler.config';
import { KnexModule } from 'nestjs-knex';
import { knexOptions } from './config/knex/knex.config';
import { cacheOptions } from './config/redis/redis-cache-store.config';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MorganModule,
		ThrottlerModule.forRoot([throttlerOptions()]),
		KnexModule.forRoot({ config: knexOptions() }),
		CacheModule.register(cacheOptions),
		MailerModule.forRoot(mailerOptions()),
	],
	controllers: [AppController],
	providers: [AppService, morganPrvider],
})
export class AppModule {}
