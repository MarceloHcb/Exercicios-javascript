let numero = 10;
let fatorial = numero
for (let index = 1; index <= numero; index += 1) {
    fatorial *= index
}
console.log(fatorial)


let word = 'tryber';
for (let index = word.length ; index>= 0 ;index -- ) {
  console.log(word[index])
}

let array = ['java', 'javascript', 'python', 'html', 'css'];
let largerWord = []
let menor = 0;
for (let index = 0; index < array.length; index += 1) {
  largerWord.push(array[index].length)
  if (largerWord[index] <= largerWord[index]){
    menor=(largerWord[index])
  }else{
    console.log("i dont know")
  }
}
console.log(largerWord);
console.log(menor)

const num = 50
let primos = []
let naoPrimos = []
for (let index = 2; index <= num ; index +=1){
  if (num[index] / 1 == num[index] && num[index] / num[index]== 0){
    primos.push(index)
    console.log(primos + " É primo")
  }else {
    naoPrimos.push(num[index])
    console.log(naoPrimos +" Não é primo")
  }
}
console.log()

