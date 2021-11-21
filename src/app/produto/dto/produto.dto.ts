import { Produtos } from '../entities/produto.entity'

export class ProdutoDto implements Partial<Produtos> {
  nome: string;
  descricao: string;
  preco: string;
  fabricante: string;
  createdDate: Date;
  updatedDate: Date;
}
