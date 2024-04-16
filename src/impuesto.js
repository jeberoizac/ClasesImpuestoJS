export default class Impuesto{

  constructor(montoBrutoAnual, deducciones){
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get montoBruto(){
    return this._montoBrutoAnual;
    
  }

  set montoBruto(nuevoMontoBruto){

    this._montoBrutoAnual = nuevoMontoBruto;
  }

  get deducciones(){
    return this._deducciones;
  }

  set deducciones(IngreseDeduccion){
    this._deducciones = IngreseDeduccion;
  }
}