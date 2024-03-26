const numero = window.Number(prompt("Digite seu numero"));
const div = window.document.querySelector('div#aparecer');
const titulo = window.document.querySelector('h1#titulo');

// Função para calcular a raiz quadrada do número
function raizQuadrada(){
    return (numero ** 0.5).toFixed(2);
}

// Função para adicionar quebras de linha
function pularLinha(){
    return '<br><br>';
}

// Função para verificar se o número é NaN
function isNan(){
    return isNaN(numero);
}

// Função para arredondar para baixo
function arredondaBaixo(){
    return Math.floor(numero);
}

// Função para arredondar para cima
function arredondaCima(){
    return Math.ceil(numero);
}

// Função para arredondar com duas casas decimais
function arredondaComDoisDecimais(){
    return parseFloat(numero.toFixed(2));
}

// Exibe o número no título e na div
titulo.innerHTML = `Seu Número é ${numero}`;
div.innerHTML = `Seu Número é ${numero}`;

// Cria um parágrafo para exibir as informações
var paragrafo = window.document.createElement('p');

// Constrói o texto do parágrafo usando template strings
var paragrafoTexto = `A raiz quadrada do número ${raizQuadrada()} ${pularLinha()}`;
paragrafoTexto += `A potência do número é ${numero * numero} ${pularLinha()}`;
paragrafoTexto += `É NaN? ${isNan()} ${pularLinha()}`;
paragrafoTexto += `Arredondado para baixo ${arredondaBaixo()} ${pularLinha()}`;
paragrafoTexto += `Arredondado para cima ${arredondaCima()} ${pularLinha()}`;
paragrafoTexto += `Com duas casas decimais ${arredondaComDoisDecimais()} ${pularLinha()}`;

// Define o texto do parágrafo
paragrafo.innerHTML = paragrafoTexto; 

// Adiciona o parágrafo à div
div.appendChild(paragrafo);
