const estudante = {
    nome : 'José Silva',
    idade : 32,
    cpf : '123456789101',
    turma : 'JavaScript'
}

function exibeInfoEstudante(objetoEstudante, infoEstudante){

    return estudante[infoEstudante]

}

console.log(estudante['nome'])
console.log(estudante['cpf'])

//  OU

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

estudante.telefone = '5511981885342';

console.log(exibeInfoEstudante(estudante, 'telefone'));

estudante.nome = 'José Souza';

const estudante2 =  {};

estudante2.nome = "Maria";

console.log(estudante2);

delete estudante2.nome;

console.log(estudante2);

estudante2.nome = "Maria";

delete estudante2['nome']

console.log(estudante2)

