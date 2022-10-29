

//3 - Mostre o primeiro personagem de acordo com o id da espécie

const database = require("./database");

const getCharacterBySpecie = (id) => {
 return database.characters.find((specie) => specie.speciesId === id)
}

console.log(getCharacterBySpecie(5));
