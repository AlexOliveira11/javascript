const livro = {
    titulo : 'As aventuras de Alex',
    autor : 'Alex da Silva Oliveira',
    anoPublicacao : 2017,
    genero : "Ação"
}

const anoAtual = new Date().getFullYear()

livro.idadePublicacao = anoAtual - livro.anoPublicacao

var mostrarDetalhes = "Detalhes do Livro:\n" +
"Título: " + livro.titulo + "\n" +
"Autor: " + livro.autor + "\n" +
"Ano de Publicação: " + livro.anoDePublicacao + "\n" +
"Gênero: " + livro.genero + "\n" +
"Idade de Publicação: " + livro.idadePublicacao + " anos\n";


console.log(mostrarDetalhes)

livro.avaliacao = null;

console.log(mostrarDetalhes)

if (livro.avaliacao == null){
    livro.avaliacao = 5;
    console.log(`O livro ${livro.titulo} \ntem avaliação: ${livro.avaliacao}`)
}
else{
    console.log(`O livro ${livro.titulo} já possui avaliação`)
}

livro.genero = 'Aventura'

console.log(livro)

delete livro["avaliacao"]

console.log(livro)