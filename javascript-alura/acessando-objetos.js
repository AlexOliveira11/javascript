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