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




    console.log(ul)
    for (let index = 0; index < decemberDaysList.length; index++) {
        const li = document.createElement("li")
        ul.id = "days"
        li.classList.add("day")
        ul.appendChild(li)
        li.innerText = decemberDaysList[index]
        

    }
    const li = document.querySelectorAll(".day")
    
  

    // console.log(month)

}
createNumbersCalendar()