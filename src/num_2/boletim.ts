/**2. Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1:2*P1:3) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado */

import { boletim } from "./boletim.type"

export const calcularBoletim = (lista: Array<boletim>): void => {

    const multiplicar: Array<number> = lista.map((resultado: boletim) => resultado.nota * resultado.peso);
    const soma: number = multiplicar.reduce(
        (acumulador: number, proximo: number) => (acumulador += proximo), 0);

    const tamanhoLista: number = lista.length

    const media: number = soma / tamanhoLista;

    console.log("Atividade 2: ", media);
};