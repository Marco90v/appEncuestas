import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {

  public panelOpenState = true;

  public formAnswers = new FormGroup({
    nameAnswer : new FormControl(null, Validators.required),
    preguntas : new FormArray([])
  });

  private preguntas = this.formAnswers.get('preguntas') as FormArray;

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    this.preguntas.push(new FormGroup( { pregunta: new FormControl(null, Validators.required), tipo: new FormControl(null, Validators.required) } ));
  }

  newAnswer(){
    // tslint:disable-next-line: max-line-length
    this.preguntas.push(new FormGroup( { pregunta: new FormControl(null, Validators.required), tipo: new FormControl(null, Validators.required) } ));
  }

  ver(){
    console.log(this.formAnswers.value);
  }

}
