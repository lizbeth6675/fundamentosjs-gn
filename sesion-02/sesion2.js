var time = 12;
var greeting; // Undefined

// // ejemplo control de flujo IF/ELSE

if (time < 12) {
    greeting = "Buenos dias";
} else if (time < 20) {
    greeting = "Buenas tardes";
} else if (time >= 20 && time < 24) {
    greeting = "Buenas noches";
} else {
    greeting = "La hora no existe"
}

console.log(greeting);


//ejem.control de flujo Switch//

var day = 2;
var text; // undefined


switch (day) {
    case 0:
           text = "Domingo";
        break;
    case 1:
            text = "Lunes";
        break;
     case 2:
            text = "Martes";
        break;
    case 3:
            text = "Miercoles";
        break;
    case 4:
        text = "jueves";
        break;
    case 5:
        text = "Viernes"
        break;
    case 6:
        text = "Sabado"
        break;
    default:
        text= "El dia no existe"
        break;

console.log(text);

// ejem. operador ternario

var speed = 101;
// var message = speed > "vas muy rapidpo" : estas debajo del limite;

var message = speed > 120? "vas volando"
:(
speed > 100 && speed <= 120?
"vas muy rapido"
: "estas debajo del limite"
);
// if (speed > 120) {
//  message = "vas volando";
// } else if (speed > 100 && speed <= 120) {
//  message = "vas muy rapido";
// else {
// message = "estas debajon delm limite"
// }

console.log(message);

// Ejemplo - Truthy / Falsy

var message; 
var myVar = [];

if (myVar) {
    message = "Truthy";
} else {
    message = "Flasy";
}

console.log(message);


// Ejemplo de Bucles (Ciclos)

for (var index = 0; index < 100; index++) {
    if (index < 50) {
    console.log("hola mundo", index,"ultimos 50");
    } else {
    }
    
}

// reto n1 numer0s pares
for (var index = 0; index <= 100; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}


 // 2 ejemplo numeros pares    

var pares = 0;

while (pares <= 100) {
    if( pares % 2 !== 1 ) {
    }
}
        console.log( pares );

// reto 2 - numeros primos
for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;

    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            isPrime = false;
    }
}

if (isPrime) {
    console.log(counter); 
    }

}


}
