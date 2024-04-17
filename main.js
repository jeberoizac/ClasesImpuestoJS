// Importar funciones del módulo de operaciones

import { Cliente } from './src/cliente.js';

// Realizar operaciones
let cl1 = new Cliente('Pedro');
//cl1.calcularImpuesto(500,50);




// Mostrar resultados
console.log(`EL Cliente : ${cl1._nombre} debe impuesto por : $ ${cl1.calcularImpuesto(5000,200)}`);


