import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('teachings')
export class TeachingsController {
  @Get()
  findAll(@Req() request: Request): string {
    return `Test my findAll teachings controller`;
  }
}
