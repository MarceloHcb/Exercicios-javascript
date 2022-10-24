const button = document.getElementById("btn")
const h2 = document.getElementById("h2")
let clickCount = 0
button.addEventListener("click", () => {
    clickCount += 1
    h2.innerHTML = clickCount
})
let param = "Marcelo"
const substituaX = (param) => {
    const frase = 'Tryber x aqui!'
    const nova = frase.split(" ")
    nova[1] = param
    console.log(nova);
}
substituaX(param)

const substituaX2 = (param) => {
    const frase = 'Tryber x aqui!'
    let result = frase.replace("x", `${param}`)
    console.log(result);
}
substituaX2("Marcelo")

const palindromo = (palavra) => {
    let result = (palavra.split("").reverse().join("") === palavra) ? console.log("Palindromo") : console.log("não é palindromo")
    return result
}
palindromo("ovo")
