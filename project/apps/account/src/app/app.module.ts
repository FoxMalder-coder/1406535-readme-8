import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountConfigModule } from '@project/account-config';
import { NotifyModule } from '@project/account-notify';
import { AuthenticationModule } from '@project/authentication';
import { getMongooseOptions } from '@project/shared-helpers';
import { UserModule } from '@project/user';
@Module({
  imports: [
    UserModule,
    AuthenticationModule,
    AccountConfigModule,
    MongooseModule.forRootAsync(
      getMongooseOptions('db')
    ),
    NotifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
