const btnSend = document.getElementById("btn-send")
const inputProduto = document.getElementById("input-produto")
const listaDeCompras = document.getElementById("lista-de-compras")
const btnClear = document.getElementById("btn-clear")

function criarItem(text) {
    const createLi = document.createElement("li")
    createLi.classList.add("item-lista")
    createLi.innerText = text;
    listaDeCompras.appendChild(createLi)
}

function adicionarItensStorange() {
    const itens = document.getElementsByClassName("item-lista")
    console.log(itens);
    let arrItems = []
    for (const item of itens) {
        arrItems.push(item.innerText);
    }
    localStorage.setItem("itens",JSON.stringify(arrItems))
}


function colocarItemLista() {
    const inputValue = inputProduto.value;
    criarItem(inputValue)
    inputProduto.value = "";
    console.log(inputValue);
    adicionarItensStorange()
}
btnSend.addEventListener("click", colocarItemLista)

function retornaStorange(){
    
    if(localStorage.itens){
       const retornados =JSON.parse(localStorage.itens)    

    for (let index = 0; index < retornados.length; index++) {
        console.log(retornados[index])
        criarItem(retornados[index])
    }  
    }
}
retornaStorange()