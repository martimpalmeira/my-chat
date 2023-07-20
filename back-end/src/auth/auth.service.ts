import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(phone: string, code: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(phone);

    if (user?.accessCode !== code) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, phone: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
