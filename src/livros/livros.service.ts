import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro
  ) {}

  async obterTodos(): Promise <Livro[]> {
    //return this.livroModel.findAll();
    let sql_query = `select codigo
                       from "Livros" as l 
                      where l.id in(6,8,9)`
    return this.livroModel.sequelize.query(sql_query,{
      model: Livro,
      mapToModel: true
    })
  }

  async obterUm(id: number): Promise <Livro> {
    return this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise <void> {
    this.livroModel.create(livro);
  }

  async alterar(livro: Livro): Promise<[number, Livro[]]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id
      }
    });
  }

  async apagar(id: number): Promise <void> {
    const livro = await this.obterUm(id);
    livro.destroy();
  }
}