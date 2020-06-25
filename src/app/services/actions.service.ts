import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private encuestas: any[];
  @Output() dA = new EventEmitter();

  constructor() {}

  deleteAnswer(){ this.dA.emit('deleteItem'); }

  getEncuestas(): any[]{
    this.getStorage();
    return this.encuestas;
  }

  private getStorage(){
    if (this.encuestas === null || this.encuestas === undefined){
      const lS = JSON.parse(localStorage.getItem('encuestas'));
      this.encuestas = lS === null ? [] : lS;
    }
  }

  setStorage(encuesta: any): boolean{
    try {
      this.getStorage();
      const ID = this.gererateID(encuesta.nameAnswer, 20);
      encuesta.ID = ID;
      this.encuestas.push(encuesta);
      localStorage.setItem('encuestas', JSON.stringify(this.encuestas));
      return true;
    }catch (error) {
      return false;
    }
  }

  private gererateID(cadena, largo = 10): any{
    const text = cadena.replace(/[,.?¿!¡"%()/ /]/g, ''); // cadena formateda sin espacion ni simbolos
    const lt = text.length; // longitud de cadena
    let ID = '';
    for (let i = 0; i < largo; i++) {
      let numPosition = Math.floor(Math.random() * (lt - 1) + 1); // numero aleatereo entre 1 y longitud de cadena
      const numKey = Math.floor(Math.random() * (2 - 0) + 0); // numero aleatereo entre 0 y 1 (0 = numero, 1 = letra)
      const uL = Math.floor(Math.random() * (2 - 0) + 0); // numero aleatereo entre 0 y 1 (0 = mayuscula, 1 = minscula)
      if(!numKey){
        let e;
        while (numPosition > 9) {
          e = numPosition.toString();
          // tslint:disable-next-line: radix
          numPosition = parseInt(e[0]) + parseInt(e[1]);
        }
        ID = ID + numPosition.toString();
      }else{
        if (uL){
          ID = ID + text[numPosition].toLowerCase();
        }else{
          ID = ID + text[numPosition].toUpperCase();
        }
      }
    }
    return ID;
  }

}
