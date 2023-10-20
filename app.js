console.log('Mi primer console.log');
console.log(9*8);
alert('El dato no es correcto');
/* 
   * declaración de variables
*/

var nombre = 'Miguel';
var edad = 29;
var apellido;
console.log(nombre);
console.log(apellido);
console.log(edad);
/* var ya es obsoleto, ahora se usan let y const
 */
const usuario='@mackyruizpadron';
console.log(usuario);
/* si en algún momento consideramos que el valor de la variable va a cambiar, utilizamos let */

/* tipos de datos primitivos */

// * number
// * string
// * Boolean
// * null
// * undefined

const cinco='5'; // devuelve una string
console.log(cinco);
console.log(typeof cinco); // typeof me indica el tipo de dato
const cincoNum = Number(cinco) // devuelve un valor numerico
console.log(cincoNum);
console.log(typeof cincoNum); 

// Arreglos array y objetos 

let students = ['Macky','Maryest','Mitch','Alex'];
console.log(students);

//* para acceder a algún elemento del array lo hacemos así 
console.log(students[0])
// el resultado es 'Macky'

// Para cambiar el valor de algún elemento del array usamos:
students[2] = 'Mitchel Ruiz';
console.log(students);

let grades =[5,20,7,9];
console.log(grades);
grades[1]=10;
console.log(grades);

let user= {
   firsName: 'Macky',
   lastName: 'Padrón',
   age: 55,
   isMilenial: false,
};
console.log(user);
//* para accesar al valor de un elemento en especifico
console.log(user.lastName)
console.log(user.isMilenial)

//  para cambiar el valor de un elemento:
user.age = 56;
console.log(user.age);

const edad = prompt('Dime tu edad'); // prompt siempre da string
console.log(edad, typeof);
const edadNum = number(edad);
console.log(edadNum, typeof); // resultado númerico

// operadores
// matématicos
console.log(5 + 8);
console.log(5 - 8);
console.log(5 * 8);
console.log(5 / 8);
console.log(2 ** 8); // exponenciación 2 a la 8
console.log(8 % 5); // residuo 8 entre 5 igual a 1 y sobran 3, el residuo es 3
console.log(15 % 5); // 15 entre 5 es igual a 3 y el residuo es 0

// Operadores de comparación 
      // *Comparaciónes

console.log(5 < 8); //true
console.log(5 <= 8); //true
console.log(8 <= 8); //true

console.log(5 > 8); // false
console.log(5 >= 8); // false
console.log(8 >= 8); // true

      // * Igualdades

console.log(8 == 8); // true
console.log(8 != 8); // false
console.log(7 == 8); // false
console.log(8 != 8); // true

//* el == compara solo el valor
//* el === compara el valor y el tipo de dato





// Lógicos
// &&
// || 



