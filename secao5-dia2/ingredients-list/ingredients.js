let ingredientItems = [
    "500g de feijão carioquinha cozido",
    "200g de toucinho",
    "1 concha de óleo",
    "1 cebola média picada",
    "4 dentes de alho",
    "5 ovos",
    "1 colher de sopa de sal com alho",
    "cheiro verde a gosto",
    "200g de farinha de mandioca"
];

let ingredientsList = document.querySelector(".ingredients-list")

for (let index = 0; index < ingredientItems.length; index += 1) {
    let ingredient = ingredientItems[index]

    let ingredientsListItems = document.createElement("li");
    ingredientsListItems.innerText = ingredient;
    
    ingredientsList.appendChild(ingredientsListItems)
}

