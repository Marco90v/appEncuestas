import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public preguntas: any[] = Array(0);
  public respuestas: any[] = Array(0);
  private ID: string;
  public contador: any[];

  constructor(private action: ActionsService, private ruta: ActivatedRoute) {
    this.ID = ruta.snapshot.params.ID;
    this.preguntas = action.getEncuestas(this.ID);
    this.respuestas = action.getRespuestas(this.ID);
  }

  ngOnInit(): void {
    console.log(this.respuestas);
    // this.contador = Array(t)
  }

}
