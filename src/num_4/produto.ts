/*4. Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.*/

import { produto } from "./produto.type";

const listaDeProdutos: produto[] = [];

function cadastrarProduto (produto: produto): void {
    listaDeProdutos.push(produto);
    console.log(`Produto "${produto.nome}" cadastrado com sucesso.`);
}

  function excluirProduto(id: number): void {
    const index = listaDeProdutos.findIndex((produto) => produto.id === id);
    if (index === -1) {
      console.log(`Produto com ID ${id} não encontrado.`);
    } else {
      const produtoExcluido = listaDeProdutos.splice(index, 1)[0];
      console.log(`Produto "${produtoExcluido.nome}" com ID ${id} excluído.`);
    }
  }

  export {cadastrarProduto, listaDeProdutos, excluirProduto}

  