let number1 = 10;
let number2 = 20;

//Para sumar 2 number usamos el +
console.log("Suma", number1 + number2);

//Para restar usamos el -
console.log("Resta", number1 - number2);

//Para multiplicar usamos *
console.log("Multiplicar", number1 * number2);

//Para dividir usuamos el /
console.log("División", number1 / number2);

//Así como podemos transformar un dato a String también
//existe la clase Number, la cual permite transformar un String a un valor numérico
let number3 = "22";
console.log(Number(number3));
let number4 = "Luis";
//Cuando queramos transformar un dato a number y este
//no sea posible, tendremos como resultado NaN (Not a number)
console.log(Number(number4));

//Ejemplo
//En un registro solicitamos la edad
//veintidos
//!Esto no es posible, mostrará NaN
console.log(Number("veintidos"));
console.log(Number("one"));

//Otras formas de transformar un String >> Number
let number5 = "33.5";
//Forma 1
console.log("Forma1", Number(number5));
//Forma 2
console.log("Forma2", parseInt(number5));
//Forma 3
console.log("Forma3", +number5);
//Forma 4
console.log("Forma4", parseFloat(number5));

//Objeto Math
//objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
//No es un objeto de función.
const operation = 3 * 2 * 10 - 5 / 2;
//math.sqrt sirve para sacar la raíz cuadrada
console.log(Math.sqrt(operation));
//math.pow sirve para sacar la potencia
console.log(Math.pow(6, 3));
console.log(Math.pow(4, 3));

//Vamos a ver como solicitar un dato del navegador
//Prompt muestra una casilla en la cual podemos escribir algo
//el valor ingresado, será almacenado en la variable
//!todo valor recibido por el prompt es string
const catetoA = prompt("Ingrese el valor de A");
const catetoB = prompt("Ingrese el valor de B");

const operation2 = match.sqrt(match.pow(catetoA, 2) + match.pow(catetoB, 2));
console.log("La hipotenusa es", operation2);
