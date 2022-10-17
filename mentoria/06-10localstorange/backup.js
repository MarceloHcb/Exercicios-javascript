const button = document.getElementById('submitButton');
const senha = document.querySelector('#password');
const email = document.getElementById('email');
const nome = document.getElementById('input-name');
const textArea = document.getElementById('textarea');
const sobrenome = document.getElementById('input-lastname');
function buttonValidation(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') { alert('Olá, Tryber!'); }
  alert('Email ou senha inválidos.');
}

button.addEventListener('click', buttonValidation);

function counterCaracter() {
  const textValue = textArea.attributes.maxlength.value;
  const p = document.getElementById('counter');
  textArea.addEventListener('input', () => {
    p.innerHTML = textValue - textArea.value.length;
  });
}
counterCaracter();

function getHouse() {
  const houses = document.getElementById('house');
  const result = houses.options[houses.selectedIndex].value;
  return result;
}

function getSubjects() {
  const subjects = document.querySelectorAll('.subject');
  const result = [];
  subjects.forEach((subject) => {
    if (subject.checked === true) {
      result.push(`  ${subject.value}`);
    }
  });
  return result;
}

function getEvaluation() {
  const evaluations = document.getElementsByName('rate');
  let result = '';
  evaluations.forEach((evaluation) => {
    if (evaluation.checked === true) {
      result = evaluation.value;
    }
  });
  return result;
}

function getFamily() {
  const families = document.getElementsByName('family');
  let result = [];
  families.forEach((family) => {
    if (family.checked === true) {
      result = family.value;
    }
  });
  return result;
}
function storangeData() {
  const email2 = document.getElementById('input-email');
  let obs = '';
  if (textArea.value) {
    obs = textArea.value;
  }
  const data = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email2.value,
    casa: getHouse(),
    familia: getFamily(),
    materias: getSubjects(),
    avaliacao: getEvaluation(),
    observacoes: obs,
  };
  localStorage.setItem('itens', JSON.stringify(data));
}
const form2 = document.getElementById('form-data');
const ul = document.getElementsByTagName('ul')[0];
const form = document.getElementById('evaluation-form');

function loadData() {
  if (localStorage.itens) {
    const main = document.getElementsByTagName('main');
    const itens = JSON.parse(localStorage.itens);
    const allItens = [`Nome: ${itens.nome} ${itens.sobrenome}`, `Email: ${itens.email}`,
      `Casa: ${itens.casa}`,
      `Família: ${itens.familia}`, `Matérias: ${[itens.materias]}`,
      `Avaliação: ${itens.avaliacao}`, `Observações: ${itens.observacoes}`];
    for (let index = 0; index < allItens.length; index += 1) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = allItens[index];
    }
    form.style.display = 'none';
    form2.style.display = 'flex';
    main.innerHTML = form2.innerHTML;
  }
}

const email2 = document.getElementById('input-email');
const options = document.querySelectorAll('option');
const families = document.getElementsByName('family');
const subjects = document.querySelectorAll('.subject');
const evaluations = document.getElementsByName('rate');
const itens = JSON.parse(localStorage.itens);
function setOptions() {
  options.forEach((opt) => {
    if (opt.value === itens.casa) {
    return  opt.setAttribute('selected', 'selected');
    }
  });
}
function setFamily() {
  families.forEach((family) => {
    if (family.value === itens.familia) {
      return family.setAttribute('checked', 'checked');
    }
  });
}
function setSubjects() {
  const itensM = itens.materias;
  console.log(itensM);
  for (let index = 0; index < subjects.length; index += 1) {
    const subIndex = subjects[index];
    if (subIndex.id.value === itensM[index]) {
     return subjects[index].setAttribute('checked', 'checked');
    }
  }
}
function setEvalutions() {
  evaluations.forEach((evaluation) => {
    if (evaluation.value === itens.avaliacao) {
      evaluation.setAttribute('checked', 'checked');
    }
  });
}
function loadForm() {
  if (localStorage.itens) {
    email2.value = itens.email;
    nome.value = itens.nome;
    sobrenome.value = itens.sobrenome;
    setOptions();
    setFamily();
    setSubjects();
    setEvalutions();
    textArea.value = itens.observacoes;
  }
}

function habilitButton() {
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('click', (event) => {
    event.preventDefault();
    const submitButton = document.getElementById('submit-btn');
    if (agreement.checked === true) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', true);
    }
    submitButton.addEventListener('click', () => {
      storangeData();
      loadData();
    });
  });
}
loadForm();
habilitButton();
