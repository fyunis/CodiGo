const names = ["Pepe", "Juan", "María", "Luisa", "Carlos", "Lucas"];
console.log(names);
console.log(names[3]);
console.log(names[6]);
//! Si queremos mostrar un dato en una posición que no existe
//! js retorna undefined
//length => esta función retorna la cantidad de elementos
console.log("names", names.length);

const data = [1, true, false, -2, "Hola mundo"];
console.log("data", data.length);

//Si queremos acceder al último elemento de un array usando la función length
//! Siempre la cantidad de elementos es mayor en 1 al índice
console.log(data[data.length - 1]);

//push => esta función sirve para agregar un elemento al array
//el elemento se agrega en la última posición
data.push("New data");
console.log("data with push", data);
//Agregando un array dentro de un array
//el array agregado es tomado como un elemento más
console.log("add array into array");
data.push(["Pepe", "Juan", "María"]);
console.log(data);

//array dentro de un array
const datapoc = [
    1,
    true,
    false,
    -2,
    "Hi world!",
    "Add new data",
    ["Pepe", "Juan", "María"],
];

//la siguiente ejecución muestra -2
console.log(datapoc[3]);
//la siguiente ejecución muestra "Pepe", "Juan", "María
console.log(datapoc[6]);
//la siguiente ejecucición muestra "Pepe"
console.log(datapoc[6][0]);
//! Podemos tener N array's dentro un array padre, 
//! y debemos utilizar la misma lógica para acceder los datos.

//pop => esta función permite eliminar el ÚLTIMO elemento de un array
//y lo retorna
const laptops = ["hp", "macbook", "asus", "lenovo"];
console.log("Laptops: " + laptops);
//retorna el elemento eliminado
console.log("Element deleted", laptops.pop());
console.log("Laptos: ", laptops);

//Supongamos que tenemos una lista de alumnos
const students = ["Luis", "Juan", "María", "Luciana", "Lucas"];
console.log("The student " + students.pop() + " fue eliminado");
console.log("Students", students);

//unshift => esta función agrega un elemento a un array, en la primera
//posición
students.unshift("Daniel");
console.log("Unshift", students);

//shift => esta función elimina el primer elemento de un array
console.log(students.shift());

//indexOf => esta función retorna la poisición en base a un dato
const colors = ["Red", "Green", "Yellow", "Blue", "Purple"];
//Nota: si tenemos elementos repetidos va encontrar al más cercano
//en este caso el primero
//! Es caseSensitive
//! Si se pone un valor que no existe, retorna -1
//* Podemos usar esta función para validar si un elemento existe en un array
console.log(colors.indexOf("Green"));

//búsqueda
const search = prompt("Enter a color");
if (colors.indexOf(search) !== -1) {
    alert("The color exist and is " + colors[colors.indexOf(search)]);
} else {
    alert("The color does not exist")
}
