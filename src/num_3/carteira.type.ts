export interface transacao {
    descricao: string;
    valor: number;
}

export interface carteira {
    saldo: number;
    transacoes: transacao[];
}
