// Mais Prática 
// let, const, arrow functions, template literals e ternary operator.

const fatorial = (n) => {
    let result = 1
    for (let index = 2; index <= n; index++) {
         result *= index
        }
        return result
} 

console.log(fatorial(4));

 

function aconteceu(){
    let longestWord ='Antônio foi ao banheiro e não sabemos o que aconteceu'
const nova = longestWord.split(' ')

let maxLength = ""
for (let index = 0; index < nova.length; index++) {
    
    nova.forEach(n =>{
        if (n.length > nova[index].length){
            maxLength = n
        }
    })
    }
    console.log(maxLength);
}

aconteceu()