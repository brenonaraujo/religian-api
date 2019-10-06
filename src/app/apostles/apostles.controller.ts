import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApostlesService } from './apostles.service';
import { ApostleDto } from './entity/dto/apostle-dto';

@Controller('api/apostles')
export class ApostlesController {
  constructor(private readonly apostlesService: ApostlesService){}

  @Post()
  async create(@Body() apostleDto: ApostleDto) {
    return await this.apostlesService.create(apostleDto);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return await this.apostlesService.findAll();
  }
}
