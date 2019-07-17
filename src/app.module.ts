import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApostlesController } from './modules/apostles/apostles.controller';
import { TeachingsModule } from './modules/teachings/teachings.module';
import { ApostlesModule } from './modules/apostles/apostles.module';
import { TeachingsController } from './modules/teachings/teachings.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ApostlesModule, TeachingsModule, AuthModule, UsersModule],
  controllers: [AppController, TeachingsController, ApostlesController],
  providers: [AppService],
})
export class AppModule {}
