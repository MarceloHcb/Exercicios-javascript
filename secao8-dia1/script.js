let name = "Marcelo Henrique"
let email = "mclo@mclo.com"
function completeName(name) {
  const nameData = name.split(' ').join('').toLowerCase()
  return { name, email: `${nameData}@trybe.com` };
}
const newEmployees = () => {

  const employees = {
    id1: completeName('Pedro Guerra'),
    id2: completeName("Luiza Drumond"),
    id3: completeName("Carla Paiva")
  }
  return employees
}
console.log(completeName("Marcelo Henrique"))
console.log(newEmployees(completeName("Marcelo Henrique")))



