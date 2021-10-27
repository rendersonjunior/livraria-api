import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {
    this.sincronizaBancoDados();
  }

  getHello(): string {
    return 'Hello World!';
  }

  async sincronizaBancoDados() {
    await this.sequelize.sync();
  }
}
