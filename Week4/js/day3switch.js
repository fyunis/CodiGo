document.write("<h1>Day 3 - Switch</h1>");

//!Recordemos que cuando usamos prompt cualquier tipo de dato que guarde
//!este será un string

// let angle = 400;
//     document.write("The angle entered is:" + " " + angle);

//     if (angle == 0) {
//         document.write("<p>Null Angle</p>");
//     } else if (angle < 90) {
//         document.write("<p>Acute Angle</p>");
//     } else if (angle == 90) {
//         document.write("<p>Right Angle</p>");
//     } else if (angle < 180) {
//         document.write("<p>Obtuse Angle</p>");
//     } else if (angle == 180) {
//         document.write("<p>Flat Angle</p>");
//     } else if (angle < 360) {
//         document.write("<p>Concave Angle</p>");
//     } else if (angle == 360) {
//         document.write("<p>Complete Angle</p>");
//     } else {
//         document.write("<p>The entered angle does not exist</p>");
//     }

//Forma 2 de if else
let angle = 400;
    document.write("The angle entered is:" + " " + angle);
let msg = "<p>The entered angle does not exist</p>";

    if (angle == 0) {
        msg = "<p>Null Angle</p>";
    } else if (angle < 90) {
        msg = "<p>Acute Angle</p>";
    } else if (angle == 90) {
        msg = "<p>Right Angle</p>";
    } else if (angle < 180) {
        msg = "<p>Obtuse Angle</p>";
    } else if (angle == 180) {
        msg = "<p>Flat Angle</p>";
    } else if (angle < 360) {
        msg = "<p>Concave Angle</p>";
    } else if (angle == 360) {
        msg = "<p>Complete Angle</p>";
    }  
    
    document.write(msg);

//SWITCH
// switch recibe la variable y case va evaluar cada caso
//* Esto dice que angulo va ser la variable padre
//* y cada case se evaluará la variable, sin necesidad de volver a llamarla
switch (angle) {
    case 0:
        document.write("<p>Null Angle</p>");
        //se recomienda ejecutar un brake, despúes de cada ejecución
        break;
    case 90:
        document.write("<p>Right Angle</p>");
        break;
    case 180:
        document.write("<p>Flat Angle</p>");
        break;
    case 360:
        document.write("<p>Complete Angle</p>");
        break;
}

//JS switch with range
let age = 22;
switch (age) {
    case 0:
        console.log("Recién nacido");
        break;
    case 18:
        console.log("Mayor de edad");
        break;
    case 20:
        console.log("Entro a base 2");
        break;
    case 65:
        console.log("Entro a la 3ra edad");
        break;
    default:
        console.log("Este caso no esta contemplado");
        //!En el defaul no hace falta poner brake, dado que solo entra
        //!cuando no es ninguna de las opciones declaradas
}