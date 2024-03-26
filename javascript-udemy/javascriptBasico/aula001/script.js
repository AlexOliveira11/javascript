var num1 = Number(window.prompt('Digite um número'));
var num2 = Number(window.prompt('Digite o segundo número'));

window.alert(`A soma dos dois números é ${num1 + num2}`)


function resultado(){

    let varA = 'A'
    var varB = 'B'
    let varC = 'C'
    
    const varAA = varA
    
    varA = varB
    varB = varC
    varC = varAA
    
    var mostrar = window.document.querySelector('div#ola')
    mostrar.innerHTML = `${varA} ${varB} ${varC}`;
    
    }
    


