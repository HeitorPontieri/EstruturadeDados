'use strict' 

const numbers = [23,5,9,10,100,45]

//


// MAP - Mapeia o array Percoree o array e retorna um array do mesmo tamanho, modificado ou não
// Sintaxe - array.map(callback)
// Parametros do callbac
// 1 - Elemento
// 2 - Índice
// 3 - Array

// Aplicando um desconto de 2 reais no array
const desconto = (valor) => valor- 2
const numbersDiscount = numbers.map(desconto)



// FILTER - Filtra dentro do array , percorre um array aplicando um callback e retorna um array do mesmo tamanho ou não
// Sintaxe - array.filter(callback)
// Parametros do callback
// 1 - Elemento
// 2 - índice
// 3 - Array
// Retorno do callback tem que ser BOOLEANO

// Filtrar os elementos menores que 20
const menor20 = (valor) => valor<20
const valorMenor20 = numbers.filter(menor20)

// Somar todos os valores
const soma = (a,b) => a + b
const valorTotal = numbers.reduce(soma)


import {showArray} from "./showArray.js"

showArray(numbers, 'main', 'Todos os números ')
showArray(numbersDiscount, 'main', 'Todos os números menos 2')
showArray(valorMenor20, 'main', 'Todos os números menores que 20')
showArray([valorTotal], 'main', 'Todos os números somados')


// Exercícios 
// 1 - Aumentar 100 em cada elemento
// 2 - Somente números pares
// 3 - Total dos valores com desconto de 4
// 4 - Adicionar 21 a todos os números impares


// Exercicio 1
const aumentar100 = (valor) => valor +100
const aumento = numbers.map(aumentar100)

// Exercicio 2
const pares = (valor) => valor % 2 == 0
const numerosPares = numbers.filter(pares)

// Exercicio 3
const desconto2 = (valor)  => valor - 4 
const numeroDesconto = numbers.map(desconto2)

// Exercicio 4
const impares = (valor) => valor % 2 != 0
const numerosImpares = numbers.filter(impares)
const impar = (a,b)=> a + 21   
const numImpar = numerosImpares.map(impar)

showArray(aumento, 'main', 'Todos os números somados a 100')
showArray(numerosPares, 'main', 'Todos os números pares')
showArray(numeroDesconto, 'main', 'Todos os números com menos 4')
showArray(numImpar, 'main', 'Todos os números impares somados a 21')
