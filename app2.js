Condicional sencilla IF
let isPremium = false;
if(isPremium == false){
    console.log('Anuncio!');
}
console.log('Reproduciendo vídeo');
console.log('fin!');


// Condicional IF-ELSE

let isPremiun = false;
if(isPremiun === false) {
    console.log('Anuncio!!');
    console.log('Reproduciendo vídeo');
} else{
    console.log('Reproduciendo vídeo');
}


// otro ejemplo
let age = 19
if(age >=18) {
    console.log('Quieres un vino?');
} else {
    console.log('Quieres agua?');
}
*/

// varios if else
let semaforo = prompt('de que color está el semaforo?');
if (semaforo === 'verde') {
    console.log('Avanza'); 
} else if (semaforo === 'amarillo'){
    console.log('Disminuye la velocidad');
} else if (semaforo === 'rojo'){
    console.log('Detente');
} else {
    alert('Escribe en minúsculas y un color válido');
}



/* Escribe un programa donde se le pida al usuario un número e imprima en consola si el número es par o impar */

// si es un número NO válido -> true
// si es un número válido -> false


let num = Number(prompt('Escribe un número'));
if (!isNaN (num)) { // isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false  ....NaN es un falsy
/*
    console.log(num);
    if (num % 2 === 0) {  // si el residuo de num es igual a 0
        console.log('El número',num, 'Es par');
    } else {
        console.log('El número', num, 'Es impar');
    }
} else {
    console.log('Ingresa un número válido');
}
*/

// Versión simple

let num = Number(prompt('Escribe un número'));
if(num) {
    if (num % 2 === 0) {
        console.log('El número',num, 'Es par');
    } else {
        console.log('El número', num, 'Es impar');
    }
} else {
        console.log('Ingresa un número válido');
}
}

// versión utilizando template strings y backticks  (``)

let num = Number(prompt('Escribe un número'));
if(num) {
    if (num % 2 === 0) {
        // console.log('El número',num, 'Es par');
        console.log( `El número ${num} es par`);
    } else {
        // console.log('El número', num, 'Es impar'); // imprime un string luego un número y otro string
        console.log( `El número ${num} es impar`); // imprime todo en string
    }
} else {
        console.log('Ingresa un número válido');
}

const age = 20;
let drink;

if(age >= 18) {
    drink = 'vino';
} else {
    drink = 'awita';
}

//          condición      true     false
let drinkOT = age >= 18 ? 'vino' : 'awita';

console.log(drink);
console.log(`A mi me gusta tomar ${drinkOT}`);
console.log(`A mi me gusta tomar ${age >= 18 ? 'vino' : 'awita'}`);


// ejemplo de un operador ternario
const avgPopulation = 33;
const mxPopulation = 100;
let isMxAbove = mxPopulation >= avgPopulation ?
                        'encima':
                        'debajo';

console.log(`México tiene una población por ${isMxAbove} del promedio`);


