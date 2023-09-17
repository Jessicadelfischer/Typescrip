import { funcionario } from "./funcionario.type"
import { mostrarInformacoesUsuario } from "../num_5/user"
import { mostrarInformacoesDiretor } from "../num_6/diretoria"

/*7. Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor.*/
export const mostrarFuncionarios = (lista: Array<funcionario>): void => {
    lista.map((cadaFuncionario: funcionario) => 'nivelComissionamento' in cadaFuncionario ? 
    console.log(mostrarInformacoesDiretor(cadaFuncionario)) : 
    console.log(mostrarInformacoesUsuario(cadaFuncionario))
    )
}