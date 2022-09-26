let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = 0;
for (let index = 0; index <menu.length; index +=1){
    if(menu[index] === "Portfólio"){
        indexOfPortfolio = index;
    }
}

console.log("Index Portifólio = " ,indexOfPortfolio);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaNumbers += numbers[index]
    console.log("Números do Array " + numbers[index]);
}
console.log("A soma dos Números é " + somaNumbers)
let mediaANumbers = somaNumbers / numbers.length
console.log("A média dos números é " + mediaANumbers)
if (mediaANumbers >= - 20) {
    console.log("Valor maior que 20")
} else {
    console.log("valor menor ou igual a 20");
}

let maiorNumero = 0;
let menorNumero = Number.POSITIVE_INFINITY;

let numerosImpares = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }    
}

console.log("O menor número é " + menorNumero);
console.log("O maior número é " + maiorNumero)

