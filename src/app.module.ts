import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livros/livro.model';
import { LivrosService } from './livros/livros.service';
import { LivrosController } from './livros/livros.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
      quoteIdentifiers: false,
      define: {
        freezeTableName: true,
        underscored: true
      }
    }),
    SequelizeModule.forFeature([Livro, User]),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController,
                LivrosController],
  providers: [AppService,
              LivrosService],
})
export class AppModule {}
