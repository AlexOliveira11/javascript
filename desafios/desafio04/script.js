function gerar(){

    var inputTabuada = window.document.querySelector('input#tabuada')
    var tabuada = Number(inputTabuada.value)

    var inputGerar = window.document.querySelector('div#resultado')

    if(isNaN(tabuada) || inputTabuada.value.trim === "" || tabuada === 0){
        window.alert('Digite algum valor númerico')
        return;
    }
    else{
        for(c = 1; c <= 10; c++){
            inputGerar.innerHTML += `${tabuada} x ${c} = ${tabuada * c}`
        }
    }
}