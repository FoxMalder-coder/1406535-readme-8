import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig, MediaConfig, MongoConfig } from '@project/shared-configurations';

const APP_ENV = 'apps/media/media.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, MediaConfig, MongoConfig],
      envFilePath: APP_ENV,
    }),
  ]
})
export class MediaConfigModule {}
