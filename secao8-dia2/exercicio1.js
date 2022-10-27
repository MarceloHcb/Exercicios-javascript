const books = require("./books")

function authorBornIn1947(param) {
    return books.find((book) => book.author.birthYear === param ).author.name   
       
}
console.log(authorBornIn1947(1947))

function smallerName() {
    let nameBook;
   books.forEach((book) => {
    if(!nameBook || book.name.length < nameBook.length){
        nameBook = book.name
    }
   })
    return nameBook;
  }
  console.log(smallerName());


  const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
          name: 'George R. R. Martin',
      birthYear: 1948,
    },
      releaseYear: 1991,
  };
  function getNamedBook() {
    return books.find((book) =>  book.name.length === 26 )
  }
  console.log(getNamedBook());


  function booksOrderedByReleaseYearDesc() {
    books.sort((a,b) => a.releaseYear - b.releaseYear)
    const orderDate = []
    books.forEach((book) => orderDate.push(book))
    return orderDate
  }
//   console.log(booksOrderedByReleaseYearDesc());



function everyoneWasBornOnSecXX() {
    
 return books.every((book)=>  book.author.birthYear > 1990 && book.author.birthYear < 2000)

}
console.log(everyoneWasBornOnSecXX());


function someBookWasReleaseOnThe80s() {
    let book;
  book = books.find((book) => book.releaseYear > 1980 && book.releaseYear < 1990)
  return book ? true : false
}
console.log(someBookWasReleaseOnThe80s());



function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}