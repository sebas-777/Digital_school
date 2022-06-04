// tipos de variables 


// string
// " Hello World"
// 'Hello World'


// //number

// 10000
// -2.3

// // array

// ['jose','ryan','martha']
// [1,2,3,4,5,6,7,8]
// [true,false,null]


// // objeto

// 'ryan'
// 70.4
// 14
// true


// {
//     "username": 'ryan',
//     "score":70.4,
//     "hours":14,
//    " proffesional": true,
// }



//operadores 

let numberOne = 60;
let numberTwo = 100;

let result = numberOne + numberTwo;

console.log(result);

let name = 'Jhon'
let lastname = 'Carter'

let completeName = name + ' ' + lastname


console.log(completeName);

let comparacion = numberOne > numberTwo

console.log(comparacion) 

// condicionales
let passwordDB = 'pepe123'

let input = 'asdbasdma'

let condicionales = input === passwordDB;

if(comparacion === true){
    console.log('Login Correcto')
}

else {
    console.log('Login incorrecto')
}

let score = 70 

if (score < 15 ){
    console.log('You Need To practice more')
} else if (score > 30){
    console.log('Estas mejorando')
}else{
    console.log('You need to follow this tutorial')
}

let typeCard = 'Debid Card'

switch(typeCard){
    case 'Debid Card':
        console.log('This is a debit card')
        break
    case 'Credit Card':
        console.log('This is a credit card')
        break
    default:
        console.log('No Card')
}

// bucles

let count  = 10 

while(count > 0) {
    console.log('el numero es : ' + count)
    count = count - 1
}


let contador = 0 

while(contador <= 50) {
    console.log(' el numero es : ' + contador)
    contador++;
}

let names =['ryan','joe','john','mario']

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// funciones

function greeting(){
    console.log('hello world')
}

greeting()


function saludo(name){
    console.log(name)
}


saludo('isabella')

function add(n1,n2){
    console.log(n1 + n2)
}

add(1,3)