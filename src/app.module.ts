import { Module } from '@nestjs/common';
import { ApostlesController } from './app/apostles/apostles.controller';
import { TeachingsModule } from './app/teachings/teachings.module';
import { ApostlesModule } from './app/apostles/apostles.module';
import { TeachingsController } from './app/teachings/teachings.controller';
import { AuthModule } from './app/auth/auth.module';
import { UsersModule } from './app/users/users.module';
import { DatabaseModule } from './configuration/database/database.module';

@Module({
  imports: [ApostlesModule, TeachingsModule, AuthModule, UsersModule, DatabaseModule],
  providers: [],
})
export class AppModule {}
