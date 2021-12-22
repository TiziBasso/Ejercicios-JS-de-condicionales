// Condicionales 

/*Ejercicio 1 

let medidaEnMetros = prompt ("Ingrese su medida en Metros ");
let comprobacion = Number.isFinite(parseFloat(medidaEnMetros)); // para todo numero finito (Number.isFinite)

if(comprobacion == true){
let medidaEnPies = parseFloat (medidaEnMetros) * 3.28084 ;
let medidaEnPulgadas = parseFloat (medidaEnMetros) * 39.3701 ;
let medidaEnCentimetros = parseFloat (medidaEnMetros) * 100 ;
    alert ("Pies= " + medidaEnPies.toFixed (2) + ("ft") + "\nPulgadas= " + medidaEnPulgadas.toFixed (2) + ("in") + "\nCentímetros= " + medidaEnCentimetros.toFixed ("2") + ("cm"));
}else {
    alert("Error NaN");
}

*/

/*ejercicio 2

let edad = prompt ("Ingrese su edad ");

if(edad < 18){
    document.write("eres menor de edad");
}else {
    document.write("eres mayor de edad");
}

*/

/* Ejercicio 3

let sabores = prompt("Digame sus sabores");
let confirmacion = prompt("¿quiere cobertura de chocolate?")

if(confirmacion.toLowerCase() == "si"){
    alert("Su helado sabor " + sabores + " con cobertura de chocolate cuesta $180");
}else {
    alert("Su helado sabor " + sabores + " sin cobertura de chocolate cuesta $150");
}

*/

/* Ejercicio  4

let numero1 = prompt ("Ingrese el primer número");
let numero2 = prompt ("Ingrese el segundo número");
let resultado = parseFloat (numero1) + parseFloat (numero2);
console.log("El resultado de la suma es: " + resultado);

resultado /= 2; // resultado = resultado / 2;

if(parseInt(resultado) == resultado) {
    console.log("El numero es par");
}else {
    console.log("El numero es impar");
}

*/

/* Ejercicio 5

let numero = prompt ("Ingrese un número");

if(numero < 0){
    document.write("el numero es negativo");
}else if(numero > 0){
    document.write("el numero es positivo");
}else {
    document.write("el numero es 0");
}

*/

/* Ejercicio 6

let monto = prompt("Ingrese cantidad de dinero");

if(monto > 2000){
    let descuento = monto - monto*0.1;
    document.write("el total a pagar es " + descuento);
}else {
    document.write("total a pagar " + monto);
}

*/

/*ejercicio 7 

 let texto = prompt("ingrese un texto");
 let posicion = prompt("ingrese un numero de posicion");

 let letra = texto.slice(posicion-1,posicion);

 letra = letra.toLowerCase();

 if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    document.write("la letra seleccionada es vocal");
 }else {
    document.write("la letra no es una vocal");
 }

*/

/*ejercicio 8

let nota = prompt("ingrese su nota del 1 al 10");

if(nota <= 3){
    document.write("aplazado");
}else if(nota >= 4 && nota <=5){
    document.write("reprobado");
}else{
    document.write("aprobado");
}

*/

/*ejercicio 9

let numero1 = prompt("ingrese primer numero");
let numero2 = prompt("ingrese segundo numero");

if(numero1 > numero2){
    document.write("el primer numero es mayor");
}else if(numero1 == numero2){
    document.write("los numeros son iguales");
}else {
    document.write("el segundo numero es mayor");
}

*/

/*ejercicio 10

let mes = prompt("ingrese un mes del 1 al 12");
document.write(new Date(2021, mes, 0).getDate());
//new date sirve para ingresar una nueva fecha (num_año , num_mes , num_dia)
// Le agregamos un 0 en el numero de dia para que vaya al ultimo dia del mes anterior. Ya que el mes lo toma desde el 0 al 11 siendo 0 enero y 11 diciembre

*/

/*ejercicio 11

let numero1 = prompt("ingrese primer numero");
let numero2 = prompt("ingrese segundo numero");
let numero3 = prompt("ingrese tercer numero");

if(numero1 > numero2 && numero1 > numero3){
    document.write("el primer numero es el mayor");
}else if(numero2 > numero1 && numero2 > numero3){
    document.write("el segundo numero es el mayor");
}else if(numero3 > numero1 && numero3 > numero2){
    document.write("el tercer numero es el mayor");
}else {
    document.write("Hay numeros iguales");
}

*/

/*ejercicio 12

let  edad = prompt("ingrese su edad");
let bebida = prompt("ingrese una bebida entre: Cerveza $50, jugo $10, agua $1");

alert("NO SE FIA, NO INGRESAR NUMEROS NEGATIVOS");


if(bebida.toLowerCase() == "cerveza" && edad < 18){
    alert("Prohibida su venta a menores de edad (Excepto en argentina)");
}else {
    let monto = prompt("¿con cuanto dinero pagara?");
    
    if(bebida.toLowerCase() == "cerveza"){
        monto -= 50;
        document.write("su vuelto sera " + monto);
    }else if (bebida.toLowerCase() == "jugo"){
        monto -= 10;
        document.write("su vuelto sera " + monto);
    }else if(bebida.toLowerCase() == "agua"){
        monto -= 1;
        document.write("su vuelto sera " + monto);
    }
}
*/

/*ejercicio 13

let mes = prompt("Ingrese un mes del 1 al 12");
if (mes == 1) {
    alert("Enero");
}else if (mes == 2) {
    alert("Febrero");
}else if (mes == 3) {
    alert("Marzo");
}else if (mes == 4) {
    alert("Abril");
}else if (mes == 5) {
    alert("Mayo");
}else if (mes == 6) {
    alert("Junio");
}else if (mes == 7) {
    alert("Julio");
}else if (mes == 8) {
    alert("Agosto");
}else if (mes == 9) {
    alert("Septiembre");
}else if (mes == 10) {
    alert("Octubre");
}else if (mes == 11) {
    alert("Noviembre");
}else if (mes == 12) {
    alert("Diciembre");
}

*/

/*BONUS

1. Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.


let clave = 4523;
let balance = 10000;

let claveIngresada = prompt("Ingrese su clave de seguridad");

if (clave == claveIngresada) {
    let monto = prompt("Su balance es de $" + balance + ". Ingrese el monto a retirar");

    if (monto < balance) {
        balance = balance - monto;
        alert("Su balance es de $" + balance);
    } else {
        alert("No puede retirar más dinero del que tiene disponible")
    }

} else {
    alert("Ingreso una clave incorrecta")
}
*/


/*2. Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

let dia = prompt("Ingrese su día de nacimiento");
let mes = prompt("Ingrese su mes de nacimiento (en número)");

if ((dia >= 21 && mes == 3) || (dia <= 20 && mes==4 )) {
    alert('Aries');

} else if((dia >= 21 && mes == 4)||(dia <= 21 && mes == 5)){
    alert('Tauro');

} else if((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
    alert('Géminis');

} else if((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) {
    alert('Cáncer');

} else if((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) {
    alert('Leo');

} else if((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
    alert('Virgo');

} else if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
    alert('Libra');

} else if((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
    alert('Escorpio');

} else if((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
    alert('Sagitario');

} else if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
    alert('Capricornio');

} else if((dia >= 21 && mes == 1)||(dia <=19 && mes == 2)) {
    alert('Acuario');

} else if((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {
    alert('Piscis');

} else {
    alert("No es una fecha válida");
}
*/       


/*3. Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 

let nombre = prompt("Ingrese su nombre");
let hora = prompt("Ingrese la hora (Ej.: 19.20)");

if (hora >= 12 && hora < 19) {
    alert("Buenas tardes " + nombre);
} else if (hora >= 19 || hora < 5) {
    alert("Buenas noches " + nombre);
} else {
    alert("Buenos días " + nombre);
}
*/

//******************************************************** */

// Bucles

/* Ejercicio 0

let clave = 4523;
let balance = 10000;
let eleccion = 0;

let claveIngresada = prompt("Ingrese su clave de seguridad");

do {
    if (clave == claveIngresada) {
        let monto = prompt("Su balance es de $" + balance + ". Ingrese el monto a retirar");
    
        if (monto < balance) {
            balance = balance - monto;
            alert("Su balance es de $" + balance);
            eleccion = prompt("Ingrese 1 si quiere seguir operando o ingrese 0 si quiere salir.");
        } else {
            alert("No puede retirar más dinero del que tiene disponible");
            eleccion = prompt("Ingrese 1 si quiere seguir operando o ingrese 0 si quiere salir.");
        }
    
    } else {
        alert("Ingreso una clave incorrecta");
    }
} while (eleccion === 1);
*/

/* Ejercicio 1

for (let index = 0; index < 10; index++) {
    document.write(`${index +1} `);
}
*/

/* Ejercicio 2

let auxiliar = 0;

for (let index = 0; index < 5; index++) {
    let numero1 = prompt(`Ingrese el número n° ${index + 1}`);
    auxiliar = parseInt(numero1) + auxiliar;
}

document.write("La suma de tus números es de " + auxiliar);
*/

/*Ejercicio 3

let auxiliar = 0;
let eleccion = prompt("¿Cuántos números desea sumar?")

for (let index = 0; index < eleccion; index++) {
    let numero1 = prompt(`Ingrese el número n° ${index + 1}`);
    auxiliar = parseInt(numero1) + auxiliar;
}

document.write("La suma de tus números es de " + auxiliar);
*/

/*Ejercicio 4

let auxiliar = 0;
let index = 1;

do {
    var numero1 = prompt("Ingrese el número n° " + index + ". Si quiere dejar de sumar ingrese 0");
    auxiliar = parseInt(numero1) + auxiliar;
    index++;
} while (numero1 > 0);

alert("La suma de tus números es de " + auxiliar);
*/

/* Ejercicio 5

let auxiliar = 0;
let index = 1;

do {
    var numero1 = prompt("Ingrese el número n° " + index + ". Si quiere dejar de sumar ingrese t");
    numero1.toLowerCase();
        if (numero1 == "t") {
            auxiliar = auxiliar / (index - 1);
        } else {
            auxiliar = parseInt(numero1) + auxiliar;
            index++;
        }
        
} while (numero1 != "t");

alert("El promedio de tus números es de " + auxiliar);
*/

/* Ejercicio 6

let numeroIntroducido = prompt("Introduzca un número");
numeroIntroducido = parseInt(numeroIntroducido);

for (let index = 1; index <= numeroIntroducido; index++) {
    document.write(index + " ");
    
}
*/

/* Ejercicio 7

let numeroIntroducidoUno = prompt("Introduzca el primer número");
let numeroIntroducidoDos = prompt("Introduzca el segundo número");
numeroIntroducidoUno = parseInt(numeroIntroducidoUno);
numeroIntroducidoDos = parseInt(numeroIntroducidoDos)

for (let index = numeroIntroducidoUno; index <= numeroIntroducidoDos; index++) {
    document.write(index + " ");
    
}
*/

/* Ejercicio 8

let numeroIngresado = prompt("Ingrese la cantidad de números que quiere ingresar");
numeroIngresado = parseInt(numeroIngresado);
let auxiliar = 0;

for (let index = 0; index < numeroIngresado; index++) {
    var numeros = prompt("Ingrese el número " + (index +1));
    numeros = parseInt(numeros);

    if(numeros > auxiliar) {
        auxiliar = numeros;
    }
}

alert("El número mayor es " + auxiliar);
*/

/* Ejercicio 9 

let numeroIngresado = prompt("Ingrese la cantidad de números que quiere ingresar");
numeroIngresado = parseInt(numeroIngresado);
var auxiliar = Number.POSITIVE_INFINITY;


for (let index = 0; index < numeroIngresado; index++) {
    var numeros = prompt("Ingrese el número " + (index +1));
    numeros = parseInt(numeros);
    
    if(numeros < auxiliar) {
        auxiliar = numeros;
    }
}

alert("El número menor es " + auxiliar);
*/

/* Ejercicio 10
let contador = prompt("Ingrese un número");

for (let index = 0; index < contador; index++) {
    document.write("*");
}
*/

/* Ejercicio 11
let base = prompt("Ingrese el valor de la base");
let exponente = prompt("Ingrese el valor del exponente");
base = parseInt(base);
exponente = parseInt(exponente);
let auxiliar = base;

for (let index = 0; index < exponente--; index++) {
    
    base = base * auxiliar;

    
}

alert("El resultado es: " + base);
*/

/* Ejercicio 12
let numero = prompt("Ingrese un número");
numero = parseInt(numero);
var auxiliar = numero;

for (let index = numero; index > 1; index--) {
    console.log(auxiliar = auxiliar * (index-1));
    
}

console.log("El resultado es: " + auxiliar);
*/

/* Ejercicio 13

let numero = prompt("Ingrese un número");
numero = parseFloat(numero);

for (let index = numero; index > 1; index--) {
    let resto = numero % index;
    if(resto === 0){
        console.log(index);
    }
}
*/

/* Ejercicio 14

let numero = prompt("Ingrese un número");
numero = parseInt(numero);
let cadena = prompt("Ingrese una cadena de texto");

for (let index = 0; index < numero; index++) {
    console.log(cadena.charAt(index));
    
}
*/

//Ejercicio 15

do {
    var items = prompt("Ingrese item de la lista. Si desea finalizar la lista escriba un punto.");
    document.write(items);
    do {
        items = prompt("Ingrese item de la lista. Si desea finalizar la lista escriba un punto.");
        if(items != "."){
            document.write(", " + items);
        }
    } while (items != ".");
    
} while (items != ".");

var aux = 1;
        do{
            var items = prompt("ingrese item de la lista. Si desea finalizar la lista escriba un punto.");
            
            if(items != "."){
                if(aux === 1){
                    document.write(items);
                }else {
                    document.write("," + items);
                }
            }
            aux++;
        }while(items !== ".")
        
        console.log(aux);

