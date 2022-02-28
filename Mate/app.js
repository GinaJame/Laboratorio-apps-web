var mateBasica = require('./mate')
const readline = require("readline");

//CREAR INTERFAZ PARA INPUT Y OUTPUT
const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//FUNCION RECURSIVA PARA DEPEGAR EL MENU DE CALCULADORA Y HACER OPERACION
var calcularRecursivo =function () {
    //PREGUNTAR POR LA OPERACION
    inquirer.question(" ¿Qué quieres hacer ahora? + - * / %  (Ingresa el operador o cualquier otra tecla para salir):  ", function (operacion) {
        //SALIR SI NO ES UN OPERADOR VALIDO
        if(operacion !== "+" && operacion !== "-" && operacion !== "/" && operacion !== "*" && operacion !== "%"){
            return inquirer.close()
        }
        inquirer.question("Ingresa el primer número:  ", a => {
            inquirer.question("Ingresa el segundo número:  ", b => {
                if(operacion == "+"){
                    console.log( 'La suma de a y b es igual a '+ mateBasica.suma(a,b))
                }else if(operacion === "-"){
                    console.log( 'La resta dea y b es igual a '+ mateBasica.resta(a,b))
                }else if(operacion ==="*"){
                    console.log( 'El producto de a por b es igual a '+ mateBasica.producto(a,b))
                }else if(operacion ==="/"){
                    console.log( 'La division de a por b es igual a '+ mateBasica.division(a,b))
                }else if(operacion ==="%"){
                    console.log( 'El modulo de a y b es igual a '+ mateBasica.modulo(a,b))
                }
                calcularRecursivo();
            });
        });
    });
    
};


console.log("Bienvenido a la calculadora básica de Gina")
calcularRecursivo();


