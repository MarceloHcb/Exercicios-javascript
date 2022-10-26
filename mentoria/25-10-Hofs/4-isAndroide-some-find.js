const data = require("./database")

//6 - Imprimir se existe algum personagem de uma determinada espécie. True ou False. Caso o retorno seja True, traga os nomes de todos os personagens desta espécie.

const isAndroide = (specie) => {
    let names = []
    if(data.species.some((specieSome) => specieSome.name === specie)){
        data.species.find((el)=> names.push(el) )
    }
    return names
}

console.log(isAndroide("Saiyans"));
