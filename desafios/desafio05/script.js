var array = []
var numeroinput = window.document.querySelector('input#numero');
var numero = Number(numeroinput.value)

var select =  window.document.querySelector('select#finalizar')

var resultado = window.document.querySelector('div#resultado')

function adicionar(){

    if(numeroinput.value.trim() === "" || numero === 0 || numero > 100){
        window.alert('Digite um valor valido entre [1 e 100]');
        return
    }
    else{

        array.push(numero)
        var item = document.createElement('option') ;
        item.text = `Valor ${numero} adicionado`;
        item.value = `Valor${numero}`;
        select.appendChild(item);

    }
}

function finalizar(){

    if(select.value.trim() === "" ){
        window.alert('VAZIO')
    }
}
