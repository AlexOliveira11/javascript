const objPessoa = {
    nome : 'José Silva',
    idade : 32,
    cpf : '123456789101',
    turma : 'JavaScript'
}

console.log(objPessoa.nome)
console.log(`O nome de estudante é ${objPessoa.nome}`);
console.log(`os três primeiros números do cpf são ${objPessoa.cpf.substring(0,3)}`)