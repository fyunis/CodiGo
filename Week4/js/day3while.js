//while (condición) {}
//nota: un while suele ir acompañado de un contador, con el objetivo de darle un fin
//al while
let meter = 0;
while (meter < 10) {
    console.log(meter); // meter = 0
    //para que esto de aca no sea siempre true
    //vamos a sumarle a meter 1 en cada vuelta
    //meter = meter + 1;
    meter += 1;
}

//Ejemplo:
const students = ["Juana", "Pepe", "Hugo", "Paco", "Luis"];
let meter2 = 0;

//Primera vuelta:
// 0 < 5 (student.length = 5) - cantidad elementos array
//Segunda vuelta:
// 1 < 5
//Tercera vuelta:
// 2 < 5
//Cuarta vuelta:
// 3 < 5
//Quinta vuelta:
// 4 < 5
//Sexta vuelta: //! en esta vuelta no se cumple la condicion por ende ejecuta y para
// 5 < 5

while (meter2 < students.length) {
    console.log(students[meter2]);
    meter2 += 1;
}