/*1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.*/

import {media} from "./media.type";

    export const calcularMedia = (note1: number, note2: number) :media => {
        const media = (note1 + note2)/2
        return{
            media: media,
            aprovado: media>=6 ? true : false
        };

};