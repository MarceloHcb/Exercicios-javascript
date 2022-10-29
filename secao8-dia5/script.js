// // definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
  
//   // desestruturando o objeto:
//   const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
//   // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };
  
//   const { workDays, weekend } = daysOfWeek;
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']
  
//   const weekdays = [...workDays, ...weekend];
//   console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//   const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };
  
// //   const { a: nome, b: classAssigned, c: subject } = student;
  
// //   console.log(nome); // Maria
// //   console.log(classAssigned); // Turma B
// //   console.log(subject); // Matemática
  
// //   const abc = [a, b, c]
// //   const letra = {abc}
// //   console.log(letra);

  const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];



const [ola,saudacao] = saudacoes
console.log(ola);
console.log(saudacao("oi"));

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = "brasileiro" } = person;
  console.log(nationality);
  const getPosition = (latitude, longitude) => ({
     latitude,
     longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

  const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome pessoa usuária!

  const multiply = (number, value = 3) => {
   return number * value
  };
  
  console.log(multiply(8));