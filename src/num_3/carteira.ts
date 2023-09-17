/*3. Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.*/

import { transacao, carteira } from "./carteira.type"

function criarCarteira(): carteira { 
return{
    saldo: 0,
    transacoes: [],
};
}

function lancarEntrada (carteira: carteira, descricao: string, valor: number): void {
    if (valor <= 0){
        console.log("O valor da entrada deve ser maior que zero.");
        throw new Error('O valor da entrada deve ser maior que zero.');
    }

    carteira.saldo += valor;
    const entrada: transacao = {descricao, valor };
    carteira.transacoes.push(entrada);
}

function lancarSaida(carteira: carteira, descricao:string, valor: number): void{
    if (valor <= 0){
        console.log("O valor de saída deve ser maior que zero.");
        throw new Error('O valor de saída deve ser maior que zero.');
    }
    if (valor > carteira.saldo){
        console.log("Saldo insuficiente para esta saída.");
        throw new Error('Saldo insuficiente para esta saída.');
    }

    carteira.saldo -= valor;
    const saida: transacao = { descricao, valor };
    carteira.transacoes.push(saida);
}

export { criarCarteira, lancarEntrada, lancarSaida };