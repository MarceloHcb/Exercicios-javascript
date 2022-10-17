function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

function createNumbersCalendar() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const month = document.querySelector(".month-container")
    const ul = document.getElementsByTagName("ul")[1]

    for (let index = 0; index < decemberDaysList.length; index++) {
        const li = document.createElement("li")
        ul.id = "days"
        li.classList.add("day")
        ul.appendChild(li)
        let day = decemberDaysList[index]
        li.innerText = day
        if (day === 25) {
            li.classList.add("friday")
            li.classList.add("holiday")
        }
        else if (day === 24 || day === 31) {
            li.classList.add("holiday")
        } else if (day === 4 || day === 11 || day === 18) {
            li.classList.add("friday")
        }
        else {
        }
    }

}
createNumbersCalendar()

function hollidays(Feriados) {
    const button = document.createElement("button")
    const divButtonsContainer = document.querySelector(".buttons-container")
    button.setAttribute("id", "btn-holiday")
    button.innerHTML = "Feriados"
    divButtonsContainer.appendChild(button)
}
hollidays()

function changeHolidayColor() {
    const button = document.querySelector("button")
    let contador = 0;
    let holidays = document.querySelectorAll(".holiday")
    let friday = document.querySelectorAll(".friday")[3]
    for (let index = 0; index < holidays.length; index += 1) {
        let holiday = holidays[index]
        holiday.style.backgroundColor = "gray"
        holiday.style.color = "white"

        button.addEventListener("click", () => {
            if (contador === 0) {
                holiday.style.backgroundColor = "red"
                friday.style.backgroundColor = "red"
                contador += 1
            } else if (contador === 1) {
                holiday.style.backgroundColor = "gray"
                friday.style.backgroundColor = "gray"
                contador = 0
            }
        })
    }
    console.log(contador);
}
changeHolidayColor()
function friday() {
    const divButtonsContainer = document.querySelector(".buttons-container")
    const button = document.createElement("button")
    button.setAttribute("id", "btn-friday")
    button.innerHTML = "Sexta-feira"
    button.setAttribute("id", "btn-holiday")
    divButtonsContainer.appendChild(button)

}
friday()

function changeFridayText() {
    const button = document.querySelectorAll("button")[1]
    let friday = document.querySelectorAll(".friday")
    console.log(friday);
    button.addEventListener("click", () => {
        let contador = 0
        for (let index = 0; index < friday.length; index++) {
            if (contador === 0) {
                friday[index].innerText = "Sextou"
                contador += 1
            } else if (contador === 1) {
                contador = 0
            }
        }

    })
}
changeFridayText()

function zoomCalendar() {
    const li = document.querySelectorAll(".day")
    for (let index = 0; index < li.length; index += 1) {
        li.addEventListener("change", (event) => {
            event.target.style.fontSize = "20px"
        })
    }

}
changeFridayText()