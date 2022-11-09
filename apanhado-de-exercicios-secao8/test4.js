const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const getName = () => species.map(({ name }) => name);
const getAnimal = (param) => species.find(({ name }) => name === param).availability;
const getofficeHour = (param) => {
  if (param === 'Monday') {
    return 'CLOSED';
  }
  const { open, close } = hours[param];
  return `Open from ${open}am until ${close}pm`;
};
const exibition = (param) => {
  if (param === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species.filter(({ availability }) => availability.includes(param)).map(({ name }) => name);
};

function obj(scheduleTarget) {
  return {
    [scheduleTarget]: {
      officeHour: getofficeHour(scheduleTarget),
      exhibition: exibition(scheduleTarget),
    },
  };
}
const obj1 = () => {
  const week = Object.keys(hours).sort();
  return week.reduce((acc, day) => {
    acc[day] = {
      officeHour: getofficeHour(day),
      exhibition: exibition(day),
    };
    return acc;
  }, {});
};
function getSchedule(scheduleTarget) {
  const name = getName();
  if (!scheduleTarget || (!Object.keys(hours).includes(scheduleTarget)
   && !Object.values(name).includes(scheduleTarget))) {
    return obj1();
  }
  if (name.includes(scheduleTarget)) {
    return getAnimal(scheduleTarget);
  }
  return obj(scheduleTarget);
}

module.exports = getSchedule;
