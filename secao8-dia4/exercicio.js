// Utilize o reduce para transformar uma matriz em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    return arrays.reduce((acc, cur) => {
        return acc.concat(cur)
    }, [])
}
//    console.log(flatten());

const books = require("./books")


//   Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    const string = books.reduce((acc, cur) => {
        return `${acc} , ${cur.author.name}. `
    }, "")
    return string.substring(3)
}
//  console.log(reduceNames());
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
//   const media =  releaseYear - birthYear / 2
  return books.reduce((acc,cur,index) => {    
    const birthYear = cur.releaseYear - cur.author.birthYear 
    const length = index +1    
   return birthYear / length
   
  },0)
}
 console.log(averageAge());