const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//verificação se é um numero inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1* peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))// toFixed voce determina quantas casa decimais deve ter 

console.log(media.toString(2)) //toString - retorna o valor como uma string,
// toString(2) e passado o valor 2 dentro transforma em valores binarios

console.log(typeof media)//typeof - mostra o tipo da variavel

console.log(typeof Number) // Number com N maiusculo é uma função 