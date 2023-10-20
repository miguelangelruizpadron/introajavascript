let day = (prompt('Escribe un día de la semana laboral'));
switch(day) {
    case 'lunes':
        console.log('Limpiar bodega');
        break;
    case 'martes':
        console.log('Rellenar contenedores');
        break;
    case 'miercoles':
        console.log('Ordenar bunker');
        break;
    case 'jueves':
        console.log('Revisar Inventario');
        break;
    case 'viernes':
        console.log('Realizar compras');
        break;
    default:
        console.log('Ese no es un día laborable');
}
// si no agrego el break imprimirá todos los mensajes, hasta que encuentre una sentencia brak, es decir que si coloco un break en miércoles, apareceran los 3 primeros mensajes, no importa la respuesta que se capture

let mesc='2'
switch(mes) {
    case 1:
        console.log('Es enero');
        break;
    case 2:
        console.log('Es febrero');
        break;
    case 3:
        console.log('Es marzo');
        break;
    case 4:
        console.log('Es abril');
        break;
    default:
        console.log('Intenta con otro')
}

// hacer una calculadora de suma y resta


const operador = prompt('Escribe + o -');
const num1 = Number(prompt('Dime el primer número'));
const num2 = Number(prompt('Dime el segundo número'));

if(operador === '+') {
    console.log('La suma de ', num1, 'y', num2, 'es igual a ', num1 + num2);
} else if(operador === '-') {
        console.log('La resta de ', num1, 'menos', num2, 'es igual a ', num1 - num2);
}

// ahora utilizando switch
const operador = prompt('Escribe + o -');
const num1 = Number(prompt('Dime el primer número'));
const num2 = Number(prompt('Dime el segundo número'));

switch(operador) {
    case '+':
        console.log('La suma de ', num1, 'y', num2, 'es igual a ', num1 + num2);
        break;
    case '-':
        console.log('La resta de ', num1, 'menos', num2, 'es igual a ', num1 - num2);
        break;
        default:
            alert('Ingresa un operador válido')
}

/* if y else es más pesados para el navegador que un swhitch case, en términos de optimización es mejor utilizar un switch, pero si requerimos hacer comparaciones de menor omayor, de menor estricto o poner varias condiciones no se puede utilizar switch ya que switch solo compara através del triple = 
*/