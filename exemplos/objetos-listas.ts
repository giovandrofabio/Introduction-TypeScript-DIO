const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'    
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'pintor'
}

enum Profissao {
    Professora,
    Atriz,
    desenvolvedora,
    JogadoraDeFutebol 
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

interface Estudante extends Pessoa{
    materias: string[]    
} 

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.desenvolvedora    
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.desenvolvedora    
}

const jessia: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.desenvolvedora,
    materias: ['Matemática discreta', 'programação']    
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']    
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);    
    }
}

listar(monica.materias);