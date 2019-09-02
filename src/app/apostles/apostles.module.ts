import { Module } from '@nestjs/common';
import { ApostlesController } from './apostles.controller';
import { ApostlesService } from './apostles.service';

@Module({
  imports: [],
  controllers: [ApostlesController],
  providers: [ApostlesService],
})
export class ApostlesModule {}