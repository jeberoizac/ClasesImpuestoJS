//import Impuesto from './impuesto.js';

export class Cliente{

  constructor(nombre){
  this._nombre = nombre;

  }
  get nombre(){
    return this._nombre;
  }

  set nombre(IngreseNombre){

    this._nombre = IngreseNombre;
  }

  calcularImpuesto(montoBrutoAnual, deducciones){

    //return ((montoBrutoAnual - deducciones) * 0,21);
    var impuesto = new Impuesto();
    impuesto.montoBruto(200000);
    impuesto.deducciones(1000);
    return ((impuesto.montoBruto(200000) - impuesto.deducciones(1000)) * 0,21);

  }

}
// let cl = new Cliente ();
// console.log(cl.nombre = 'pepe');
// cl._nombre = 'pero';
// console.log(cl.nombre);
