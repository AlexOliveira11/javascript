function contador(){

    var inicio = window.document.querySelector('input#inicio')
    var inicio1 = Number(inicio.value)

    var fim = window.document.querySelector('input#fim')
    var f = Number(fim.value)

    var passo = window.document.querySelector('input#passo')
    var p = Number(passo.value)

    var resultado = window.document.querySelector('div#resultado')

    if(passo.value.lenght === null || p === 0){
        window.alert('[ERROR}, digite algum valor ')
    }
    else{
            for(var i = inicio1; i <= f; i+=p){
            resultado.innerHTML = `${i} &#128073; `; 
            }
    }
}

function contador() {
    var inicio = window.document.querySelector('input#inicio');
    var inicio1 = Number(inicio.value);

    var fim = window.document.querySelector('input#fim');
    var f = Number(fim.value);

    var passo = window.document.querySelector('input#passo');
    var p = Number(passo.value);

    var resultado = window.document.querySelector('div#resultado');

    if (inicio.value.length === 0 || inicio1 === 0) {
        window.alert('[ERRO] Digite algum valor válido para o início');
    }

    else if(fim.value.length === 0 || f === 0 || f <= i) {
        window.alert('[ERRO] Digite algum valor válido para o fim');
    } 

    else if(passo.value.length === 0 || p === 0 || p >= fim || p > f - inicio1) {
        window.alert('[ERRO] Digite algum valor válido para o passo');
    }

    else {
        resultado.innerHTML = ''; // Limpa o conteúdo anterior
        for (var i = inicio1; i <= f; i += p) {
            resultado.innerHTML += `${i} &#128073; `;
        }
    }
}