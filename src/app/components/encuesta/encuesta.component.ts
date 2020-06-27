import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  private ID: string;
  public encuesta: any;
  public pregunta: any;
  public contador = 0;
  public respuesta: string;
  public respuestas = Array(0);

  constructor(private rutaActiva: ActivatedRoute, private action: ActionsService, private ruta: Router) {
    this.ID = rutaActiva.snapshot.params.ID;
  }

  ngOnInit(): void {
    this.encuesta = this.action.getEncuestas(this.ID)[0];
    if (this.encuesta.preguntas.length > 0){
      this.pregunta = this.encuesta.preguntas[this.contador];
      this.contador++;
    }
  }

  save(){
    // tslint:disable-next-line: radix
    this.respuestas.push(parseInt(this.respuesta));
    this.next();
  }

  next(){
    this.pregunta = this.encuesta.preguntas[this.contador];
    this.contador++;
    this.respuesta = null;
    if (this.contador > this.encuesta.preguntas.length){
      this.action.setRespuesta({ID: this.ID, respuestas: this.respuestas});
      this.ruta.navigate(['']);
    }
  }

}
