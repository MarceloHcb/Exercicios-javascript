const body = document.querySelector("body")

function barraSuperior(param) {
    const header = document.createElement("header");
    header.id = "cabecalho";
    header.style.backgroundColor = "red"
    param.appendChild(header);
}

function titulo (){
    const h1 = document.createElement("h1");
    h1.setAttribute("id", "titulo");
    const header = document.getElementById("cabecalho")
    header.appendChild(h1);
}

barraSuperior(body)