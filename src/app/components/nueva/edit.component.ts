import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActionsService } from 'src/app/services/actions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class EditComponent implements OnInit {

    public formAnswers = new FormGroup({
        nameAnswer : new FormControl(null, Validators.required),
        preguntas : new FormArray([])
    });
    public preguntas = this.formAnswers.get('preguntas') as FormArray;
    public validated = false;
    public dateSave = false;
    private item: number;
    private ID: any;


    constructor(private action: ActionsService, private rutaActiva: ActivatedRoute, private ruta: Router) {
        this.ID = rutaActiva.snapshot.params.ID;
        action.dA.subscribe(a => {
            if (a === 'deleteItem'){ this.delete(); }
        });
    }

    ngOnInit(): void {
        const encuesta = this.action.getEncuestas(this.ID)[0];
        this.formAnswers.setValue({nameAnswer: encuesta.nameAnswer, preguntas: []});
        encuesta.preguntas.forEach(e => {
            this.preguntas.push(new FormGroup({pregunta: new FormControl(e.pregunta), tipo: new FormControl(e.tipo)}));
        });
    }

  newAnswer(){
    this.preguntas.push(new FormGroup({
      pregunta: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required)
    }));
  }

    save(){
        if (this.formAnswers.invalid !== true){
            const res = this.action.updateStorage(this.formAnswers.value, this.ID);
            if (res){
                this.dateSave = true;
                this.formAnswers.reset();
                this.preguntas.clear();
                setTimeout(() => {this.ruta.navigate(['/dashboard/list']); }, 1000);
            }
        }else{
            this.validated = true;
            setTimeout(() => {this.validated = false; }, 5000);
        }
    }

  delete(){ this.preguntas.removeAt(this.item); }

  itemValue(i){ this.item = i; }

}
