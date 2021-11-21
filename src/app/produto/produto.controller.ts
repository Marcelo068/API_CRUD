import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './dto/produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() request: ProdutoDto) {
    return this.produtoService.create(request);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() request: ProdutoDto) {
    return this.produtoService.update(id, request);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
}
