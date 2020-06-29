import { Injectable, Output, EventEmitter } from '@angular/core';
import { preguntasStorage } from '../../assets/preguntasStorage';
import { respuestasStorage } from '../../assets/respuestasStorage';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private encuestas: any[];
  private respuestas: any[];

  @Output() dA = new EventEmitter();

  constructor() {
  }

  deleteAnswer(){ this.dA.emit('deleteItem'); }

  getEncuestas(id?: string): any[]{
    this.getStorage();
    // tslint:disable-next-line: triple-equals
    if (id != null || id != undefined){
      return this.encuestas.filter(e => e.ID === id);
    }
    return this.encuestas;
  }

  private getStorage(){
    if (this.encuestas === null || this.encuestas === undefined){
      const lSE = JSON.parse(localStorage.getItem('encuestas'));
      // this.encuestas = lSE === null ? [] : lSE; // para uso normal
      this.encuestas = lSE === null ? preguntasStorage : lSE; // para pruebas
    }
    if (this.respuestas === null || this.respuestas === undefined){
      const lSR = JSON.parse(localStorage.getItem('respuestas'));
      // this.respuestas = lSR === null ? [] : lSR; // para uso normal
      this.respuestas = lSR === null ? respuestasStorage : lSR; // para pruebas
    }
  }

  setStorage(encuesta: any): boolean{
    try {
      this.getStorage();
      const ID = this.generateID(encuesta.nameAnswer, 20);
      encuesta.ID = ID;
      this.encuestas.push(encuesta);
      localStorage.setItem('encuestas', JSON.stringify(this.encuestas));
      return true;
    }catch (error) {
      return false;
    }
  }

  updateStorage(encuesta: any, id: string): boolean{
    try {
      encuesta.ID = id;
      this.encuestas.map(e => {
        if (e.ID === id){
          e.nameAnswer = encuesta.nameAnswer;
          e.preguntas = encuesta.preguntas;
        }
      });
      localStorage.setItem('encuestas', JSON.stringify(this.encuestas));
      return true;
    } catch (error) {
      return false;
    }
  }

  setRespuesta(respuesta){
    this.getStorage();
    this.respuestas.push(respuesta);
    localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
  }

  getRespuestas(id): any{
    this.getStorage();
    return this.respuestas.filter(e => e.ID === id);
  }

  deleted(id){
    this.encuestas.map((e, i) => {
      if (e.ID === id){
        this.encuestas.splice(i , 1);
       }
    });
    // this.encuestas = this.encuestas.filter(e => e.ID !== id);  // No se modifica la vista
    this.respuestas = this.respuestas.filter(e => e.ID !== id);
    localStorage.setItem('encuestas', JSON.stringify(this.encuestas));
    localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
  }


  private generateID(cadena, largo = 10): any{
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
