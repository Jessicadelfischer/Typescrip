export interface user {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
}

export interface diretor extends user {
    nivelComissionamento: number;
  }
  
