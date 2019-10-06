import { Module } from '@nestjs/common';
import { TeachingsController } from './teachings.controller';

@Module({
  imports: [],
  controllers: [TeachingsController],
  providers: [],
})
export class TeachingsModule {}