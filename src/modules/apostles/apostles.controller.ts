import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('apostles')
export class ApostlesController {
  @Get()
  findAll(@Req() request: Request): string {
    return `Test my findAll apostles controller`;
  }
}
