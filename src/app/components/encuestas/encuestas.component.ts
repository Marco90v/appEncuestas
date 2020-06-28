import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html'
})
export class EncuestasComponent implements OnInit {

  encuestas: any[];

  constructor(private action: ActionsService, private ruta: Router) { }

  ngOnInit(): void {
    this.encuestas = this.action.getEncuestas();
  }

  iniciar(id){
    this.ruta.navigate(['/encuesta', id]);
  }

  ingresar(){
    this.ruta.navigate(['/dashboard/list']);

  }

}
