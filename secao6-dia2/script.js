const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto() {
    for (let i = 0; i < bedroom.length; i++) {
        if (bedroom[i].checked) {
            return bedroom[i].value;
        }
    }
}

function getPessoas() {
    return select.options[select.selectedIndex].value;
}

function getData(value) {
    const valueDate = value + 'T03:00:00.000Z';
    data = new Date(valueDate);
    dataFormatada = data.toLocaleDateString('pt-BR');
    return dataFormatada;

}

function createHeader() {
    const header = document.createElement("header")
    header.classList.add("header-trybe")
    document.body.appendChild(header)
    const h1 = document.createElement("h1")
    h1.innerText = "Trybe"
    const img = document.createElement("img")
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3q0v72AJA-p9V_oPst_65uEG9dr1WxKN-ZYp_5gE&s"
    header.appendChild(h1)
    header.appendChild(img)
}

createHeader()

function createForm() {
    let form = document.createElement("form")
    document.body.appendChild(form)
    let section1 = document.createElement("section")
    form.appendChild(section1)
    section1.className = "hotel-form"
    let inputCheckin = document.createElement("input")
    inputCheckin.setAttribute("type", "date")
    inputCheckin.className = "inputCheckin"
    section1.appendChild(inputCheckin)
    let inputCheckout = document.createElement("input")
    inputCheckout.setAttribute("type", "date")
    inputCheckout.className = "inputCheckout"
    section1.appendChild(inputCheckout)
    let section2 = document.createElement("section")
    form.appendChild(section2)
    section2.className = "hotel-form"
    let inputRadio1 = document.createElement("input")
    let inputRadio2 = document.createElement("input")
    let inputRadio3 = document.createElement("input")
    inputRadio1.setAttribute("type", "radio")
    inputRadio2.setAttribute("type", "radio")
    inputRadio3.setAttribute("type", "radio")

    let label1 = document.createElement("label")
    let label2 = document.createElement("label")
    let label3 = document.createElement("label")
    label1.className ="form-label"
    label2.className ="form-label"
    label3.className ="form-label"
    label1.setAttribute("for", "radio")
    label1.setAttribute("for", "radio")
    label1.setAttribute("for", "radio")
    label1.innerText = "Comum"
    label2.innerText = "Club"
    label3.innerText = "Luxo"
    inputRadio1.setAttribute("name", "radio")
    inputRadio2.setAttribute("name", "radio")
    inputRadio3.setAttribute("name", "radio")
    inputRadio1.className = "bedroom"
    inputRadio2.className = "bedroom"
    inputRadio3.className = "bedroom"
    section2.appendChild(inputRadio1)
    section2.appendChild(label1)
    section2.appendChild(inputRadio2)
    section2.appendChild(label2)
    section2.appendChild(inputRadio3)
    section2.appendChild(label3)

    let section3 = document.createElement("section")
    section3.className = "hotel-form"
    form.appendChild(section3)
    let select = document.createElement("select")
    section3.appendChild(select)
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option")
    option1.setAttribute("value", "1")
    section3.appendChild(option1)
    
}
createForm()


function createLi() {

}