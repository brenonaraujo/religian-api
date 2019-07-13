import { Module } from '@nestjs/common';
import { ApostlesController } from './apostles.controller';

@Module({
  imports: [],
  controllers: [ApostlesController],
  providers: [],
})
export class ApostlesModule {}