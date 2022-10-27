const books = require("./books")

function formatedBookNames() {
   
   return books.map((book) => `${book.name.replace(/ /g,"_")} - ${book.genre.replace(/ /g,"_")} - ${book.author.name.replace(/ /g,"_")}`)   
    
  }
  console.log(formatedBookNames());