function verificar(){

    var data = new Date()
    var nascimento = data.getFullYear()

    var ndata = window.document.querySelector('input#data')
    var resultado = window.document.querySelector('div#resultado')

    if(ndata.value.lenght == 0 || Number(ndata.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else{
        var sexo
    }
}


