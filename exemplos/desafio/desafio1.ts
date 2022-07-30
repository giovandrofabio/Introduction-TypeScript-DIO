// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

// Resposta 1
const employee = {
    code: 10,
    name: 'João'
};

// Resposta 2
const employee1: {code: number, name: string} = {
    code: 10,
    name: 'joao'
}

// Respostas 3 e 4
interface employee2 {  
    code: number,
    name: string
};

const funcionarioObj = {} as employee2;
funcionarioObj.code = 10;
funcionarioObj.name = 'João';

const funcionarioObj2: employee2 = {
    code: 10,
    name: 'João'
}