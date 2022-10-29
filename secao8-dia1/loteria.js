const fun = () => {
  return Math.ceil(Math.random() * 5)
}

function geradorDeNumero(num,fun) {
  console.log(fun);
   let result = (num === fun) ? 'Parabéns você ganhou' : 'Tente novamente';
    return result
}

console.log(geradorDeNumero(2,fun()))