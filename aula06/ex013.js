idade = 64

if( idade < 16){
    console.log('Voto não obrigatorio')
}
else if(idade < 18 || idade >= 65){
    console.log('Voto opcional')
}
else{
    console.log('Voto Obrigatorio')
}