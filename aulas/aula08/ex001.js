var num = [5, 8, 2, 9, 3]

num.sort()

console.log(num)

num.push(1)

console.log(num)

for(c = 0; c <= num.length; c++){
    console.log(num[c])
}

for(c in num){
    console.log(num[c])
}

var numero = 9

var pos = num.indexOf(numero)

if(pos == -1){
    console.log(`O valor ${numero} não foi encontrado`)
}
else{
    console.log(`O valor ${numero} esta na posição ${pos}`)
}


