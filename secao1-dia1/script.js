const a = 10
const b = 20

console.log( a + b )
console.log( a - b )
console.log( a + b )
console.log( a / b )
console.log( a % b )
console.log( a ** b)

if (a > b){
    console.log(a)
}else{
    console.log(b)
}
const c = 12
if(a > b && a > c){
    console.log(a)
}
else if(b > a && b > c){
    console.log(b)
}
else{
    console.log(c)
}

const ang1 = 80
const ang2 = 65
const ang3 = 35

if (ang1 + ang2 + ang3 === 180){
    console.log(true)
}
else if(ang1 <0 || ang2 <0 || ang3<0 ){
    console.log("ângulo inválido")
}
else{
    console.log(false)
}