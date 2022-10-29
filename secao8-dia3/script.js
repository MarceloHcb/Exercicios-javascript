const books = require("./books")

function formatedBookNames() {
   
   return books.map((book) => `${book.name.replace(/ /g,"_")} - ${book.genre.replace(/ /g,"_")} - ${book.author.name.replace(/ /g,"_")}`)   
    
  }
  // console.log(formatedBookNames());

  function nameAndAge() {
    return books
    .map((book) => (
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    ))
    .sort((obj1, obj2) => obj1.age - obj2.age);
}

  // console.log(nameAndAge());

  function fantasyOrScienceFictionAuthors() {
    return books.filter((book) => book.genre === "Fantasia" || book.genre === "Ficção Científica" )
  }
  // console.log(fantasyOrScienceFictionAuthors());

  function oldBooks() {
    const date = new Date()
    const year = date.getFullYear()
    return books.filter((book) => {
      return year - book.releaseYear > 60;
    }).sort((a,b) => a.releaseYear - b.releaseYear)
  }
  console.log(oldBooks());