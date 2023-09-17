/*6. Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”*/

import { user, diretor } from "../num_5/user.type";

function criarDiretor(
    nome: string,
    idade: number,
    nivelComissionamento: number,
    salario?: number
  ): diretor {
    return { nome, idade, ocupacao: 'Diretor', salario, nivelComissionamento };
  }

  function mostrarInformacoesDiretor(diretor: diretor): string {
    const salarioFormatado = diretor.salario ? `R$ ${diretor.salario.toFixed(2)}` : 'N/A';
    return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salarioFormatado}`;
  }

  export {criarDiretor, mostrarInformacoesDiretor}