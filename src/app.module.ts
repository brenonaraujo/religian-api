import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApostlesController } from './apostles/apostles.controller';
import { TeachingsModule } from './teachings/teachings.module';
import { ApostlesModule } from './apostles/apostles.module';
import { TeachingsController } from './teachings/teachings.controller';

@Module({
  imports: [ApostlesModule, TeachingsModule],
  controllers: [AppController, TeachingsController, ApostlesController],
  providers: [AppService],
})
export class AppModule {}
