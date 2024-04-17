import { Impuesto } from './impuesto.js';

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
    
    if( montoBrutoAnual != 0 && deducciones != 0){
      var impuesto = new Impuesto(montoBrutoAnual, deducciones);
      return ((impuesto.montoBruto - impuesto.deducciones) * 0.21).toFixed(0);
    } else {
      console.log("Montos Ingresados, No se pueden calcular, reingrese los valores");
      return 0;
    }
  }

}
// let cl = new Cliente("Pablo");
// console.log(cl);
// console.log(`EL Cliente : ${cl._nombre}  debe impuesto por : $ ${cl.calcularImpuesto(100,10)}`);