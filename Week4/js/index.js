// variable que pueda cambiar de tipo
let number = 10;
console.log("Primer tipo", number);

//podemos cambiar el tipo de datos?
//¿Cuando alteramos el valor de una variable, es necesario poner el prefijo let o const?
//no es necesario, el prefijo va solo cuando se crea la variable.
number = "Pepe"
console.log("Segundo tipo", number);

// vamos a ver el consol.log()
// permite imprimir un valor en la consola del navegador
// console.log(number)

//Prefijo Const
const igv = 0.18;
console.log("Primer IGV", igv);

//!Esto no es posible, el prefijo Const define que una variable es constante.
//! igv = 0.20;
//! console.log("Segundo IGV", igv);

//Existe otra forma de poder mostrar una variable
//alert dispara una alerta en nuestro navegador

alert(igv);

//*Concatenación: basicamente es juntar 2 o más variables
const firstname = "Fed";
const lastname = "Yunis";
let age = 22;
let days  = 20;
let isAlive = true;

//*para concatenar 2 o más strings usamos el operador +
//Cuando ocurre una concatenación de un string + number = string
console.log("Concatenación")
console.log(firstname + " " + lastname + " " + age );

//¿Existe alguna forma de convertir un number a un string?
//Sepamos que en JS existen las clases String y Number
console.log(String(age)); //*La clase String está envolviendo a la variable age (que es entero) y lo convierte a String
console.log(String(age) + String(days)); //*La clase String convierte cualquier dato a String

//El poner la coma no es concatenar, es basicamente que ponemos un valor al costado del otro
//no se usen
console.log("Usando Comas");
console.log(age,days);
console.log("Usando el +");
console.log(age + days);

console.log("Bool", isAlive);
console.log("String",String(isAlive));


//En JS podemos hacer cualquier tipo de operación matemática
console.log(age + days);