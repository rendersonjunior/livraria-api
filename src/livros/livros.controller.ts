import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard"
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

  constructor(private livrosService: LivrosService){
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async criar(@Body() livro): Promise<void> {
    this.livrosService.criar(livro);
  }

  @Put()
  async alterar(@Body() livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params): Promise <void> {
    this.livrosService.apagar(params.id);
  }
}