const books = require("./books")
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    return arrays.reduce((acc, cur) => acc.concat(cur), [])
}
//   console.log(flatten());

// Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    // return books.reduce((acc, book) =>  `${acc} ${book.author.name}.`, '')
    return books.reduce((acc, { author }) => acc + author.name, "")
}
// console.log(reduceNames());

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

function averageAge() {
    const booksNumber = books.length
    const agesNumber = books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0)
    return agesNumber / booksNumber
}
// console.log(averageAge());

// Encontre o livro com o maior nome.
function longestNamedBook() {

    return books.reduce((acc, book) => acc.name.length < book.name.length ? acc : book)

}
// console.log(longestNamedBook());

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

//   Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
//   const expectedResult = 20; 
function containsA() {
    let aConter = 0
    names.forEach((name) => {
        const letters = name.split("");
        aConter += letters.reduce((acc, letter) => {
            if (letter === "a" || letter === "A") {
                return acc + 1
            }
            return acc;
        }, 0)
    })
    return aConter
}
// console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    return students.map((student, index) => (
        {
            name: student,
            average: (grades[index].reduce((acc, grade) => acc + grade, 0) / grades[index].length)
        }
    ))
}
console.log(studentAverage());

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];



