"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'pintor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["desenvolvedora"] = 2] = "desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.desenvolvedora
};
const jessia = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
