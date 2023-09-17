import { calcularMedia } from "./num_1/media";
import { calcularBoletim } from "./num_2/boletim";
import { boletim } from "./num_2/boletim.type";
import { criarCarteira, lancarEntrada, lancarSaida } from "./num_3/carteira";
import { cadastrarProduto, listaDeProdutos, excluirProduto} from "./num_4/produto";
import { produto } from "./num_4/produto.type"
import { criarUsuario, mostrarInformacoesUsuario } from "./num_5/user";
import { user, diretor } from "./num_5/user.type";
import { mostrarInformacoesDiretor, criarDiretor} from "./num_6/diretoria"
import { funcionario } from "./num_7/funcionario.type";
import { mostrarFuncionarios } from "./num_7/funcionario";

console.log("Atividade 1: ", calcularMedia(8, 9));
console.log("Atividade 1: 2° exemplo ", calcularMedia(5, 3))

const boletim: Array<boletim> = [
    {nota: 5,peso: 10},
    {nota: 5,peso: 10}, 
    {nota: 5,peso: 10}, 
]; 
calcularBoletim(boletim);

console.log("                         Atividade 3:");
try {
    const minhaCarteira = criarCarteira();
  
    lancarEntrada(minhaCarteira, 'Salário', 5000);
    lancarSaida(minhaCarteira, 'Compras', 45);
    lancarSaida(minhaCarteira, 'Restaurante', 1500);
  
    console.log('Saldo atual:', minhaCarteira.saldo);
    console.log('Transações:', minhaCarteira.transacoes);
  } catch (error) {
    console.error
  }

  console.log("                         Atividade 4:");
  
  function listarProdutos(): void {
    console.log('Lista de Produtos:');
    listaDeProdutos.forEach((produto) => {
      console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$ ${produto.preco.toFixed(2)}`);
    });
  }
cadastrarProduto({ id: 1, nome: 'Panela de pressão', preco: 129.99 });
cadastrarProduto({ id: 2, nome: 'Frigideira', preco: 129.99 });
listarProdutos();
excluirProduto(2);
listarProdutos();

console.log("                         Atividade 5:");

const user1: user = criarUsuario('Daphne', 23, 'analista de TI', 1000);
const user2: user = criarUsuario('Daphne', 23, 'analista de TI', 0);

console.log(mostrarInformacoesUsuario(user1));
console.log(mostrarInformacoesUsuario(user2))

console.log("                         Atividade 6:");

const novoDiretor1: diretor = criarDiretor('Jéssica Fischer', 34, 5, 15000);
const novoDiretor2: diretor = criarDiretor('Jonathas Magalhães', 38, 5, 0);

console.log(mostrarInformacoesDiretor(novoDiretor1));
console.log(mostrarInformacoesDiretor(novoDiretor2));

console.log("                         Atividade 7:");

const listaFuncionarios: Array<funcionario> = [user1, user2, novoDiretor1, novoDiretor2]

mostrarFuncionarios(listaFuncionarios)