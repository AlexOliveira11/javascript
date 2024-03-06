function carregar(){
    var mensagem = window.document.querySelector('div#msg')
    var img1 = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora < 12){
        img1.src = 'fotos/manha.png'
        window.document.body.style.background = '#d6d3ba'
    }

    else if (hora >= 12 && hora < 18){
        img1.src = 'fotos/tarde.png'
        window.document.body.style.background = '#fdc0a1'
    }
    else{
        img1.src = 'fotos/noite.png'
        window.document.body.style.background = '#072342'
    }
}


