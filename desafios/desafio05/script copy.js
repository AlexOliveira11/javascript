var numeroinput = window.document.querySelector('input#numero');
var select =  window.document.querySelector('select#finalizar')
var resultado = window.document.querySelector('div#resultado')

var numero = Number(numeroinput.value)
var array = []

function isNumero(n){
    if(Number(n) > 1 && Number(n) <=100 ){
        return true
    }
    else{
        false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != 0){
        return true
    }
    else{
        false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    }
    else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}