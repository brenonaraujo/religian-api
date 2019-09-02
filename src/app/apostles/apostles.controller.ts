import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/apostles')
export class ApostlesController {
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() request: Request): string {
    return `Test my findAll apostles controller`;
  }
}
