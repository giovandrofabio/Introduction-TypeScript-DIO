// Como podemos melhorar o esse código usando TS? 

enum Profissoes {
    Atriz,
    Padeiro
}

interface pessoa {  
    nome: string,
    idade: number,
    profissao: Profissoes
};

let pessoa1: pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissoes.Atriz
};

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
}
let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}