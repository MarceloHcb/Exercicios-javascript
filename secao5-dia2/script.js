const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta")
elementoOndeVoceEsta.parentNode.style.color = "blue"
console.log(elementoOndeVoceEsta)
elementoOndeVoceEsta.firstElementChild.innerText = "Primeiro Filho do Filho"
console.log(elementoOndeVoceEsta.firstElementChild)

const pai = document.getElementById("pai")

console.log(pai.firstElementChild)
console.log(elementoOndeVoceEsta.previousElementSibling)
console.log(elementoOndeVoceEsta.parentElement.innerText)
console.log(elementoOndeVoceEsta.nextElementSibling)
console.log(elementoOndeVoceEsta.nextElementSibling.nextElementSibling)
console.log(pai.lastElementChild.previousElementSibling)