import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async obterUm(username: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        username: 
      }
    })
    //return this.users.find(user => user.username === username);
  }
}
