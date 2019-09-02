import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LoginDto } from '../entity/dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(loginDto: LoginDto): Promise<any> {
    const user = await this.authService.validateUser(loginDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
