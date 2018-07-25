const escola = "Cod3r"

console.log(escola.charAt(4))// pega o caracter da 4 posição
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))// codigo daquele caracter 

console.log(escola.indexOf('3')) //indexOf pesquisa qu posição o valor esta

console.log(escola.substring(1))// mostrar apartir de 1

console.log(escola.substring(0, 3))// mostrar na posição entre 0 e 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))// troca a possicao 3 para "e"

console.log('Ana, Maria, Pedro'.split(',')) // transforma essa String em Array