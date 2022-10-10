const body = document.querySelector("body")

function barraSuperior(param) {
    const header = document.createElement("header");
    header.id = "cabecalho";
    param.appendChild(header);
}
barraSuperior(body)