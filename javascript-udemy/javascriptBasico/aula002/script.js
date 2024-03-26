let umaString1 = 'um "texto"'
let umaString2 = 'um \"texto\"'
let umaString3 = 'O rato roeu a roupa do rei de roma.'

console.log(umaString1 , umaString2)
console.log(umaString1[6])
console.log(umaString1.charAt(7))
console.log(umaString1.concat('', 'em',' ', 'um lindo dia'))
console.log(`${umaString1} em um lindo dia`)
console.log(umaString1.indexOf('o'))
console.log(umaString1.lastIndexOf('o'))
console.log(umaString1.match(/[a-z]/g))
console.log(umaString1.search(/x/))
console.log(umaString3.replace(/r/g, '#'))
console.log(umaString3.length)
console.log(umaString3.slice(2, 6))
console.log(umaString3.slice(-5, -1))
console.log(umaString3.substring(umaString3.length -5, umaString3.length -1))
console.log(umaString3.split(' ', 2))
console.log(umaString1.toUpperCase())
console.log(umaString1.toLowerCase())



