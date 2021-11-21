import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { Produtos } from './entities/produto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  controllers: [ProdutoController],
  providers: [ProdutoService]
})
export class ProdutoModule {}
