const books = require("./books")

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
    return books.find(({ author }) => author.birthYear === 1947)
}
//   console.log(authorBornIn1947());

//   Retorne o nome do livro de menor nome.

function smallerName() {
    let nameBook;
    books.forEach(({ name }) => (!nameBook || name.length < nameBook.length) ? nameBook = name : "")
    return nameBook;
}
//   console.log(smallerName());
// Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
    return books.find(({ name }) => name.length === 26)
}
// console.log(getNamedBook());

// Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {

 return books.sort((a,b) => b.releaseYear - a.releaseYear)
}
// console.log(booksOrderedByReleaseYearDesc());

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
return books.every(({author})=> author.birthYear >1990 && author.birthYear <= 2000)
}
// console.log(everyoneWasBornOnSecXX());

// const expectedResult = true

function someBookWasReleaseOnThe80s() {
 return books.some(({releaseYear})=> releaseYear >= 1980 && releaseYear < 1989)
}

// console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) => bookSome.author.birthYear === book.author.birthYear && bookSome.id !== book.id))
}
console.log(authorUnique());