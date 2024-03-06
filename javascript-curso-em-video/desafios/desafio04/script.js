function gerar(){

    var inputnumero = window.document.querySelector('input#numero');
    var numero = Number(inputnumero.value);

    var tabuada = window.document.querySelector('div#resultado');

    tabuada.innerHTML = ""

    if(isNaN(numero) || inputnumero.value.trim() === "" || numero === 0){
        window.alert('Digite algum valor númerico')
        return;
    }
    else{  
        var select = document.createElement('select');
        select.setAttribute('size', '10');

        for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tabuada ${c}`
            select.appendChild(item)
        }
        tabuada.appendChild(select);
    }
}
