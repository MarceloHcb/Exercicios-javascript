const hq2 = {
    collection: "Worder Woman",
    title:"A Twist of Fate",
    year: 2016
};

const author = {
    authorName: "Meredith Fincç;fdbggfdgdfgdfgdfgdfçh"
};

const author2 = {
    authorName: "Meredith Finch",
    newYear: 1919
};
console.log(Object.assign(hq2, author, author2));
const clone = Object.assign({}, hq2)
clone.nova = "oi";
clone.outra = "";
console.log(clone);
