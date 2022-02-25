var mateBasica = require('./mate')
const readline = require("readline");

/*console.log('El producto de x por a es igual a '+ mateBasica.producto(4,10));
console.log(mateBasica.suma(3,4))
console.log(mateBasica.resta(15,5))
console.log(mateBasica.division(10,2))
console.log(mateBasica.modulo(10,3))*/

//MENU 
console.log('Bienvenido a la calculadora básica de Gina, ¿que quieres hacer ahora? (Ingresa el número)')
var operacion = 9
while(operacion !== 0){
    operacion = prompt('1 Sumar \n 2 Restar \n 3 Multiplicar \n 4 Dividir \n 5 Modulo \n 0 Salir') 
    var a = prompt('Ingresa tu a (primer numero) ')
    var b = prompt('Ingresa tu b (segundo numero)')
    
    if(operacion == 1){
       console.log( 'La suma de a y b es igual a '+ mateBasica.suma(a,b))
    }else if(operacion ===2){
        console.log( 'La resta dea y b es igual a '+ mateBasica.resta(a,b))
    }else if(operacion ===3){
        console.log( 'El producto de a por b es igual a '+ mateBasica.producto(a,b))
    }else if(operacion ===4){
        console.log( 'La division de a por b es igual a '+ mateBasica.division(a,b))
    }else if(operacion ===5){
        console.log( 'El modulo de a y b es igual a '+ mateBasica.modulo(a,b))
    }else if(operacion === 0){
        console.log('ADIOS')
    }else {
        console.log('No es una opción disponible')
    }
}

