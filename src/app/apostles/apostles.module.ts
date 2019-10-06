import { Module } from '@nestjs/common';
import { ApostlesController } from './apostles.controller';
import { ApostlesService } from './apostles.service';
import { apostlesProvider } from './apostles.provider';
import { DatabaseModule } from '../../configuration/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ApostlesController],
  providers: [ApostlesService, ...apostlesProvider],
})
export class ApostlesModule {}