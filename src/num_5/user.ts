/*5. Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”*/

import { user } from "./user.type";

function criarUsuario(nome: string, idade: number, ocupacao: string, salario?: number): user {
    return { nome, idade, ocupacao, salario };
  }

function mostrarInformacoesUsuario(usuario: user): string {
    const salarioFormatado = usuario.salario ? `R$ ${usuario.salario.toFixed(2)}` : 'N/A';
    return `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salarioFormatado}`;
  }

  export {criarUsuario, mostrarInformacoesUsuario}