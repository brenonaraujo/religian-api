import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Request() req) {
      return this.userService.create(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async list() {
      return this.userService.listAll();
    }
}
