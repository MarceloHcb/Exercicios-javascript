const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const pares =numbers.filter((number) => number % 2 === 0)
const resultado = pares.reduce((acc,curr) => acc + curr,0)
console.log(pares);
console.log(resultado);



const getEven = (number) => number % 2 === 0;
const sumPair = (accumulator, number) => accumulator + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152



// SOLUCAO USANDO O REDUCE 



const sumPairr = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumberss = (array) => array.reduce(sumPairr, 0);

console.log(sumNumberss(numbers)); // 152

