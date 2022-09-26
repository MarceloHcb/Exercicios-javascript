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

// LAÇO FOR 

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];


const novo = groceryList.pop()
console.log(novo)

// FOR / OF

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    name += " É meu nome ? "
    console.log(name)
}

// WHILE

function dice() {
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}
console.log(d1)

// secao4.3 OBJETOS

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};
console.log(`${player.name} de sobrenoma ${player.lastName}, Tem ${player.age} anos, e possui ${player['medals']['golden']} medalhas de ouro e ${player['medals']['silver']} medalhas de prata `)

// FOR IN FOR OF

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(index, cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car) {
    console.log(index, car[index]);
}

// FOR OF     Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
    console.log(value);
};

let namess = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let presentation in namess) {
    console.log("Olá " + namess[presentation])
}

let carr = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let value in carr) {
    console.log(`${value} ${carr[value]}`)
}

//FUNÇÕES

function somar(a, b) {
    return (a + b)
}
function diminuir(a, b) {
    return (a - b)
}
function multiplicar(a, b) {
    return (a * b)
}
function dividir(a, b) {
    return (a / b)
}
function modulo(a, b) {
    return (a % b)
}
console.log(somar(10, 20))
console.log(diminuir(10, 20))
console.log(multiplicar(10, 20))
console.log(dividir(10, 20))
console.log(modulo(10, 20))

function maior(a, b) {
    if (a > b) {
        return (a)
    }
    if (b > a) {
        return (b)
    }
}
console.log(maior(20, 60))

function maior(a, b, c) {
    if (a > b && a > c) {
        return (a)
    }
    if (b > a && b > c) {
        return (b)
    } else {
        return (c)
    }
}
console.log(maior(20, 60, 85))