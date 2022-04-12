
/* Usando variable Let para colocar mis datos, fecha, hora y año */
let nombre = "Angel";
let apellido = "Ortiz";
console.log("Mi nombre es " + nombre + " " + apellido);

let dia = "Lunes";
let diaNumero = 11;
let mes = "Abril";
let anio = "2022";
console.log("Hoy es " + dia + " " + diaNumero + " de " + mes + " de " + anio + ".");

/* Usando un alert para poder ingresar cantidad de USD que se desean cambiar por ARS */

const valorDolarUsa = 195;
let dolaresACambiar = prompt("Ingresa la cantidad de dólares que deseas cambiar (195 ARS por dólar)");
alert("Deberías recibir " + (dolaresACambiar * valorDolarUsa) + " Pesos Argentinos.");


/* Usando for para poder visualizar los números pares entre 2 y 30 */

for (let numero = 2; numero <= 30; numero = numero + 2) {
    console.log(numero);
}

/* Usando Break, si la variable i es 6, entonces se interrumpe el for */

for (let i = 0; i < 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

/* Usando Continue, con el mismo ejemplo anterior, si la variable i es igual a 6, no se interpreta la repetición en el loop */

for (let i = 0; i < 10; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

/* Usando While, se repite el bucle hasta que el user escriba ESC o 123 */

let entrada = prompt("ingrese un dato");
while (entrada != "ESC" && entrada != 123) {
    entrada = prompt("Ingrese otro dato");
}

/* Usando Do While, se repite el bucle hasta que el user escriba un número mayor a 100, cancele la entrada, ingrese texto o deje el campo vacío */

let numero;
do {
    numero = prompt("Ingrese un número mayor a 100", 0);
} while (numero <= 100 && numero);