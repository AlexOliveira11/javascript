var numeroinput = window.document.querySelector('input#numero');

var select = window.document.querySelector('select#finalizar');
var resultado = window.document.querySelector('div#resultado');

var valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true;
    }
    else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false;
    }
}

function adicionar(){
    if(isNumero(numeroinput.value) && !inLista(numeroinput.value, valores)){
        valores.push(Number(numeroinput.value));
        var item = document.createElement('option');
        item.text = `Valor ${numeroinput.value} adicionado.`;
        select.appendChild(item);
        numeroinput.value ="";
        numeroinput.focus();
    }
    else{
        window.alert('Valor inválido ou já encontrado na lista.');
    }
}

function finalizar(){

    valores.sort()

    if(select.length == 0 ){
        window.alert('Adicione valores na lista')
    }
    else{
        var totalvalores = valores.length;
        var maior = valores[valores.length - 1];
        var menor = valores[0];
        var soma = 0;

        for (c = 0;c < valores.length; c++)[

            soma += valores[c]
        ]

        var media = soma / valores.length;

        resultado.innerHTML = "";

        resultado.innerHTML += `<p>Ao todo, temos ${totalvalores} números cadastrados</p>`;

        resultado.innerHTML += `<p>O maior valor é: ${maior}</p>`;

        resultado.innerHTML += `<p>O menor valor é: ${menor}</p>`;
        
        resultado.innerHTML += `<p>A soma é: ${soma}</p>`;

        resultado.innerHTML += `<p>A média é: ${media}</p>`;
        
    }

}