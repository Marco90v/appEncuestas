import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { ActivatedRoute } from '@angular/router';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, AfterViewInit {

  // @ViewChildren('myChart') ctx: QueryList<any>;
  @ViewChildren('myChart') ctx: QueryList<ElementRef>;

  public preguntas: any;
  public respuestas: any = Array(0);
  private ID: string;
  public contador: any[];
  public totalRespuesta: any;

  myChart: any;

  constructor(private action: ActionsService, private ruta: ActivatedRoute) {
    this.ID = ruta.snapshot.params.ID;
    this.preguntas = action.getEncuestas(this.ID)[0];
    this.respuestas = action.getRespuestas(this.ID);
    console.log(this.preguntas);
  }

  tipoRes(tipo: string): Array<string>{
    if (tipo === '0'){  return ['No', 'Si']; }
    if (tipo === '1'){ return ['1', '2', '3', '4', '5']; }
    if (tipo === '2'){ return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; }
  }

  resultados(tipo: string, numPre: number){
    let res;
    if (tipo === '0'){ res = [0, 0]; }
    if (tipo === '1'){ res = [0, 0, 0, 0, 0]; }
    if (tipo === '2'){ res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; }
    this.respuestas.forEach(element => res[element.respuestas[numPre]]++ );
    return res;
  }

  ngAfterViewInit(){
    this.ctx.forEach((e, i) => {
      this.myChart = new Chart(e.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
          labels: this.tipoRes(this.preguntas.preguntas[i].tipo),
          datasets: [{
              label: this.preguntas.preguntas[i].pregunta,
              data: this.resultados(this.preguntas.preguntas[i].tipo, i),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    });


    });
  }

  onClick(){

  }

  ngOnInit(): void {
  }

}
