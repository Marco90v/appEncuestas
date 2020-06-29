import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html'
})
export class NuevaComponent implements OnInit {

  public formAnswers = new FormGroup({
    nameAnswer : new FormControl(null, Validators.required),
    preguntas : new FormArray([])
  });
  public preguntas = this.formAnswers.get('preguntas') as FormArray;
  public validated = false;
  public dateSave = false;
  private item: number;


  constructor(private action: ActionsService) {
    action.dA.subscribe(action => {
      if (action === 'deleteItem'){
        this.delete();
      }
    });
  }

  ngOnInit(): void {}

  newAnswer(){
    this.preguntas.push(new FormGroup({
      pregunta: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required)
    }));
  }

  save(){
    if (this.formAnswers.invalid !== true){
      const res = this.action.setStorage(this.formAnswers.value);
      if(res){
        this.dateSave = true;
        this.formAnswers.reset();
        this.preguntas.clear();
        setTimeout(() => {this.dateSave = false; }, 5000);
      }
    }else{
      this.validated = true;
      setTimeout(() => {this.validated = false; }, 5000);
    }
  }

  delete(){ this.preguntas.removeAt(this.item); }

  itemValue(i){ this.item = i; }

}
