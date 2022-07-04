//Declaración de variables
const name = prompt("Enter your name: ");
const gender = prompt("Enter your gender:");
let age = Number(prompt("Enter your age:"));
let grade = Number(prompt("Enter your grade:"));
let title = "";

//Mostramos valores ingresados
document.write("<p><span class='bolded'>Name:</span>" + " " + name + "</p>");
document.write("<p><span class='bolded'>Gender:</span>" + " " + gender + "</p>");
document.write("<p><span class='bolded'>Age:</span>" + " " + age + "</p>");
document.write("<p><span class='bolded'>Grade:</span>" + " " + grade + "</p>");
document.write("<hr>");

//Lógica 1 - definición de título con base en la edad y género de la persona
if (gender == "Male" && age >= 35) {
    title = "Mr.";
} else if (gender == "Male" && age < 35) {
    title = "the young men";
} else if (gender == "Female" && age >= 35) {
    title = "Mrs.";
} else if (gender == "Female" && age < 35) {
    title = "the young women";
}

//Mostramos resultado previo validación de nota y califación
document.write("<p>Based on the values ​​entered," + " " + title + " " + name + " " + "(" + age + " " + "years old), has a grade of" + " " + grade + ".</p>");

//Lógica 2 - definición de calificación con base en la nota de la persona
//también podríamos declarar una variable para la calificación con base en la nota y poner el document.write al final, concatenando
//la variable utilizada.
if (grade <= 3) {
    //span - abarcar. Es un contenedor en línea. Sirve para aplicar estilo al texto o agrupar elementos en línea.
    //Sus etiquetas son: <span> y </span> (ambas obligatorias).
    document.write("<p class='verypoor'>Your rating is very poor</p>")
} else if (grade <= 5) {
    document.write("<p class='insufficient'>Your rating is insufficient</p>");
} else if (grade <= 6) {
    document.write("<p class='enough'>Your rating is enough</p>");
} else if (grade <= 7) {
    document.write("<p class='good'>Your rating is good</p>");
} else if (grade <= 9) {
    document.write("<p class='remarkable'>Your rating is remarkable</p>");
} else if (grade <= 10) {
    document.write("<p class='outstanding'>Your rating is outstanding</p>");
} else {
    document.write("<p class='notvalid'>Please enter a grade between 0 and 10, in order to determine your current rating</p>");
}

//Mostramos resultado final:
//document.write("<p>Based on the values ​​entered, el" + title + name + "(" + age + "years old) has a grade of " + grade + "." + " " + <variable califación> + ".</p>");


