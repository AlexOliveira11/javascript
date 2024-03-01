function verificar() {

    var data = new Date()
    var ano = data.getFullYear()

    var ndata = window.document.querySelector('input#nascimento')
    var resultado = window.document.querySelector('div#resultado')

    if(ndata.value.length == 0 || Number(ndata.value) >= ano){
        window.alert('ERROR Verifique os dados e tente novamente!')
    }

    else{
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(ndata.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
           genero = 'Masculino' 
           if(idade >= 12 && idade <25){
            img.setAttribute('src', 'fotos/homem-adolescente.jpg')
           }
           else if (idade < 50){
            img.setAttribute('src', 'fotos/homem-adulto.jpg')
           }
           
           else{
            img.setAttribute('src', 'fotos/homem-idoso.jpg')
           }  
        }
        else if(sexo[1].checked){
            genero = 'Feminimo'
            if(idade >= 12 && idade <=25){
                img.setAttribute('src', 'fotos/mulher-adolescente.jpg')
               }
               else if (idade < 50){
                img.setAttribute('src', 'fotos/mulher-adulta.jpg')
               }
               else{
                img.setAttribute('src', 'fotos/mulher-idosa.jpg')
               }
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${genero} e idade ${idade}`
    resultado.appendChild(img)
}


