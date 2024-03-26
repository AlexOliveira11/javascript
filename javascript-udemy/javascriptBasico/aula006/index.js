// Definição do array de alunos com três elementos
const alunos = ['Luiz', 'Maria', 'João'];

// Modificar o primeiro elemento do array
alunos[0] = 'Eduardo';

// Adicionar 'Luiza' na posição 3 do array
alunos[3] = 'Luiza';

// Imprimir o array completo e o seu comprimento
console.log(alunos);
console.log(alunos.length);

// Adicionar elementos ao final do array
alunos[alunos.length] = 'Alex'; // Equivalente a alunos.push('Alex')
alunos.push('Arthur');

// Adicionar elemento ao início do array
alunos.unshift('Antonio');

// Iterar sobre todos os elementos do array
for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

// Remover o primeiro e o último elementos do array
alunos.shift();
alunos.pop();

// Iterar sobre os elementos restantes utilizando o loop for..in
// Cuidado: o loop for..in não garante a ordem dos elementos!
for (i in alunos) {
    console.log(alunos[i]);
    i++; // Incremento desnecessário, pois o loop já faz isso automaticamente
}

// Utilizar o método slice para criar um novo array a partir de uma parte do original
console.log(alunos.slice(1, 5)); // Cria um novo array a partir do segundo até o quinto element
