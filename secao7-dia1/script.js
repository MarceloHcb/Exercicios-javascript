// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.
const  testingScope =(escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }    
  }

  testingScope(true);

//   Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (param) =>  param.sort((a,b)=> a-b)
console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉

const albuns = [
    {name:"Iron Mainden", year:1980},
    {name:"Killers", year:1981},
    {name:"The Number of the Beast", year:1982},
    {name:"aaaaaaa", year:1989},
]

const sorted = albuns.sort((a,b)=>{
    // return b.year - a.year
    return a.name.localeCompare(b.name)
})
console.log(sorted)