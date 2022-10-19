// Escreva uma função que dado um valor numérico retorne se o valor é par.

const pairValue = (n) =>  (n % 2 === 0) ? console.log("número par") : console.log("não é par");


pairValue(5)


// Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares.

const pairSum = (arr) => {
    let soma = 0
    arr.forEach(n =>{
        if(n % 2 === 0){
            soma += n
        }
    })
    
    console.log(soma);
}
pairSum([1,2,3,5,4,6,8])

// screva uma função que dado um parâmetro retorna se o tipo de dado é Number.

const typeNumber = (n) =>  (typeof n === "number") ? console.log("É do tipo número") : console.log("não é do tipo número");

typeNumber("5")

// Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME!". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter, e caso o parâmetro não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const Validation = (name) => {
    if (typeof name === "string" && name.length >1){
        console.log("Boas Vindas", name);
    }
    else {
        console.log("Parâmetro inválido.");
    }
}
Validation("Marcelo")

// Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo * gravidade. Considere a gravidade constante de 9.8.

const finalVelocity = (tempo) => {

    const gravidade = 9.8
    let vel = parseFloat(tempo) * gravidade
    console.log(vel);

}
finalVelocity(5)

// Utilizando operadores ternários e arrow functions reescreva a seguinte função:
// function isZero(number) {
// 	if (number === 0) {
// 		return "Zero";
// 	}
// 	return "Not zero";
// }

const isZero = (number) => (number === 0)? "Zero" : "Not zero";
console.log(isZero(5))

// Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const equalValue = (val) => {
    for (let index = 0; index < val.length; index++) {
        console.log(val[index]);
       
            if(val[index] === val[index]){
                return("todos iguais");
            }
            else{
                return("não sao iguais");
            }
        
    }

}
console.log(equalValue([2,2,2,2,2,2,8]))