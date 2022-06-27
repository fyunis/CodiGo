//Problema 1:
//Hacer un algoritmo que halle el área de rectángulo
//A = BASE x ALTURA
let large = Number(prompt("Enter the length"));
let width = Number(prompt("Enter the width"));
arearec = large * width
//console.log("Area = large * width ");
console.log("The area of the rectangle is:", arearec);


//Problema 2:
//Hallar el área de círculo
//A = PI x R al cuadrado
//math.PI = retonar el valor de PI
//A = math.PI * math.pow(R, 2)
const PI = Math.PI;
//console.log("PI es:", PI);
let radius =  Number(prompt("Enter the radius of the circle"));
//console.log("The radius is:", radius);
areacir = PI * Math.pow(radius, 2);
console.log("The area of ​​a circle is:", areacir);
