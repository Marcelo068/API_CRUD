import { Injectable } from '@nestjs/common';
import { ProdutoDto } from './dto/produto.dto';

import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Produtos } from './entities/produto.entity'

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produtos)
    private readonly produtoRepository: Repository<Produtos>,
  ) {}

  async create(request: ProdutoDto) {
    return await this.produtoRepository.save(request)
  }

  async findAll() {
    const [ result, count] = await this.produtoRepository.findAndCount({
      order: {
        updatedDate: 'DESC',
      }
    });

    return { data: result, count: count }
  }

  async update(id: string, request: ProdutoDto): Promise<UpdateResult> {
    return await this.produtoRepository.update(
      { id: id },
      request,
    )
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.produtoRepository.delete(
      { id: id},
    )
  }
}
