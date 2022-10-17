const container = document.getElementById("container")
const headerContainer = document.getElementById("header-container")
const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0]
const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0]
const h3 = document.querySelectorAll("h3")
const footer = document.getElementById("footer-container")

container.style.background = "rgb(243,243,243)"
headerContainer.style.background ="rgb(0,176,105)"

emergencyTasks.style.background = "rgb(255,159,132)"
noEmergencyTasks.style.background = "rgb(249,219,94)"

for (let index =0; index <h3.length;index +=1){
    h3[0].style.background = "rgb(165,0,243)"
    h3[1].style.background = "rgb(165,0,243)"
    h3[3].style.background = "black"
    h3[2].style.background = "black"    
}
footer.style.background = "rgb(0,53,51)"




