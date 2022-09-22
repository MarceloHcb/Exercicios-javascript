// FIXAR Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas
const base = 5
const height = 8
const area = base * height
console.log(area)

// IF ELSE

const notaPessoaCandidata = 40

if (notaPessoaCandidata > 80) {
    console.log("parabéns você foi aprovada")
}
else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovado")
}
// OPERADORES LÓGICOS

const currentHour = 13;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde"
}
else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
}
else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém-passado"
}

console.log(message)



console.log(!(2 + 2) === 4);
console.log(!null);
console.log(!undefined);

// SWITCH / CASE

mes = 'setembro';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
    default:
        console.log("insira um mês do ano")
}
console.log(estacaoDoAno)

// ARRAYS

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

menu.push("Contato")

console.log(menu);