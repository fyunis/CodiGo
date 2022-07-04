let temperature = Number(prompt("Enter the temperature:"));
document.write("The temperature entered is:" + " " + temperature + " " + "degrees");

//Validación de valor numérico
if (isNaN(temperature)) {
    alert("Only numeric values ​​are allowed");
    temperature = Number(prompt("Enter the temperature:"));
}
//Lógica de temperatura
if (temperature <= 10) {
    document.write("<p class='cold'>Cold Weather</p>");
}else if (temperature <= 16) {
    document.write("<p class='mild'>Mild Weather</p>");
}else if (temperature <= 24) {
    document.write("<p class='warm'>Warm Weather</p>");
}else if (temperature > 24 ) {
    document.write("<p class='tropical'>Tropical Weather</p>");
}

