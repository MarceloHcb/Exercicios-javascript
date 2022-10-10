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
    h1.className = "h3"
    h1.innerText = "Hotel Trybe"
    const img = document.createElement("img")
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3q0v72AJA-p9V_oPst_65uEG9dr1WxKN-ZYp_5gE&s"
    header.appendChild(img)
    header.appendChild(h1)
    
}

createHeader()

function createForm() {
    const main = document.createElement("main")
    document.body.appendChild(main)
    const h1Form = document.createElement("h1")
    h1Form.innerHTML = "Reserve seu quarto!"
    h1Form.className = "h3"
    main.appendChild(h1Form)
    let br = document.createElement("br")
    let form = document.createElement("form")
    main.appendChild(form)
    let section1 = document.createElement("section")
    form.appendChild(section1)
    section1.className = "hotel-form"
    let inputCheckin = document.createElement("input")
    let labelCheckin = document.createElement("label")
    inputCheckin.setAttribute("type", "date")
    inputCheckin.className = "inputCheckin form-control"
    
    labelCheckin.innerText ="Check-in"
    section1.appendChild(labelCheckin)
    section1.appendChild(inputCheckin)
    
    let inputCheckout = document.createElement("input")
    let labelCheckout = document.createElement("label")
    inputCheckout.setAttribute("type", "date")
    inputCheckout.className = "inputCheckout form-control"
    labelCheckout.innerText ="Check-out"
    section1.appendChild(labelCheckout)
    section1.appendChild(inputCheckout)
    let section2 = document.createElement("section")
    form.appendChild(section2)
    section2.className = "hotel-form"
    let p = document.createElement("p")
    p.innerText = "Quartos:"
    section2.appendChild(p)
    let br1= document.createElement("br")
    section2.appendChild(br1)
   
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
    label1.setAttribute("for", "inp1")
    label2.setAttribute("for", "inp2")
    label3.setAttribute("for", "inp3")
    label1.innerText = "Comum"
    label2.innerText = "Club"
    label3.innerText = "Luxo"
    inputRadio1.setAttribute("name", "radio")
    inputRadio2.setAttribute("name", "radio")
    inputRadio3.setAttribute("name", "radio")
    inputRadio1.className = "bedroom  form-check-input"
    inputRadio2.className = "bedroom  form-check-input"
    inputRadio3.className = "bedroom  form-check-input"
    inputRadio1.id="inp1"
    inputRadio2.id="inp2"
    inputRadio3.id="inp3"
    section2.appendChild(label1)    
    section2.appendChild(inputRadio1)
    section2.appendChild(label2)
    section2.appendChild(inputRadio2)
    section2.appendChild(label3)
    section2.appendChild(inputRadio3)
    section2.appendChild(br1)

    let section3 = document.createElement("section")
    section3.className = "hotel-form"
    form.appendChild(section3)
    let selectLabel = document.createElement("label")
    selectLabel.setAttribute("for", "select")
    selectLabel.innerText = "Pessoas:"
    section3.appendChild(selectLabel)
    let select = document.createElement("select")    
    select.setAttribute("id", "select")
    select.className = "form-select"
    section3.appendChild(select)
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option")
    option1.setAttribute("value", "1")
    option1.setAttribute("value", "2")
    option1.setAttribute("value", "3")
    select.appendChild(option1)
    option1.innerText= "1"
    select.appendChild(option2)
    option2.innerText= "2"
    select.appendChild(option3)
    option3.innerText= "3"
    let section4 = document.createElement("section")
    form.appendChild(section4)
    let textArea = document.createElement("textarea")
    textArea.className = "obs"
    textArea.classList.add("form-control")
    textArea.setAttribute("placeHolder", "Observação")        
    textArea.setAttribute("rows", "8")       
    section4.appendChild(textArea)
    section4.appendChild(br)
    let reservButton = document.createElement("button")
    reservButton.className = "btn btn-outline-success"
    reservButton.innerText = "Reservar"
    section4.appendChild(reservButton)
    let h2 = document.createElement("h2")
    h2.innerText = "Lista de reservas"
    h2.className = "h2"
    section4.appendChild(h2)
    let cleanButton = document.createElement("button")
    cleanButton.className = "btn btn-outline-danger"
    cleanButton.innerText = "Limpar"
    section4.appendChild(cleanButton)
}
createForm()


function createLi() {

}