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
console.log(nova);
nova.forEach(n =>{
    console.log(n.length);
})
}
aconteceu()