const books = require("./books")

// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];
// Crie um array com strings no formato 
// NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  function formatedBookNames() {
    return books.map((book) => `${book.name.replace(/ /g,"_")} - ${book.genre.replace(/ /g,"_")} - ${book.author.name.replace(/ /g,"_")}`)
  }

//   console.log(formatedBookNames());

//   Construa um array de objetos a partir do array de livros. Cada objeto deve conter 
//   uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age,
//    com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por 
//    idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o 
//    livro foi lançado.

function nameAndAge() {
   return books.map((book)=> {
    const age = book.releaseYear - book.author.birthYear
        return {
            age,
            author:book.author.name,
        }
    }).sort((a,b) => a.age -b.age)
  }
//   console.log(nameAndAge());

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
   return books.filter(({genre})=> genre === "Fantasia" || genre === "Ficção Científica")
  }
//   console.log(fantasyOrScienceFiction());

//   Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do 
//   livro mais velho ao mais novo.

function oldBooksOrdered() {
    const curYear = new Date().getFullYear()    
   return books.filter(({releaseYear}) => curYear - releaseYear > 60).sort((a,b) => a.releaseYear -b.releaseYear)
  }

//   console.log(oldBooksOrdered());

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas 
// autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
    return books
    .filter((book) => book.genre ==="Fantasia" || book.genre === "Ficção Científica")
    .map(({author}) =>  author.name).sort()
  }

//   console.log(fantasyOrScienceFictionAuthors());

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.


function oldBooks() {
    const corYear = new Date().getFullYear()
    return books
    .filter(({releaseYear}) => corYear - releaseYear > 60)
    .map(({name}) => name)
  }
//   console.log(oldBooks());

// return books.find((book) => (
//     book.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {
    return books.filter(({author}) => author.name[1] === "." && author.name[4] === "." && author.name[7] === ".")
  }
console.log(authorWith3DotsOnName());
