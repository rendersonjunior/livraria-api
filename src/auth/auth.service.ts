import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && user.password === pass) {
      const { password, ...result} = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.getUsername, sub: user.userId}
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
