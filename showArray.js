'use strict'

const showArray = (array,element, title) => {
    // Puxa as classes e tags do HTML para o JS
    const container = document.querySelector(element)
    // Criando uma nova div para controlar a div 
    const div = document.createElement('div')
    // Adiciona uma classe a div criada na linha de cima
    div.classList.add("numbers-container")

    // Colocando os itens do array dentro da div com HTML
    div.innerHTML = `
     <h2>${title}<h2>
     <div class="numbers">
     <div class = "numbers-item">
        ${array.join('</div><div class = "numbers-item">')}
     </div>
     <div>
    `
    container.appendChild(div)
}

export {
    showArray
}