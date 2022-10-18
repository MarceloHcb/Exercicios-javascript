const hq1 = {
    collection: "Batman",
    title: "Batman The Killing Joke",
    year: 1988,
};

hq1.author = "Alan Moore";
for (keys in hq1) {
    console.log(keys);
}
console.log(Object.keys(hq1),Object.values(hq1));
console.log(Object.keys(hq1).join(""));

let h2 = document.createElement("h2")
h2.innerHTML = Object.entries(hq1)
// h2.innerHTML = Object.keys(hq1) +Object.values(hq1)
document.body.appendChild(h2)
