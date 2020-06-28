import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public sideBar = false;

  constructor(private action: ActionsService) { }

  ngOnInit(): void {}

  abrirCerrar(){ this.sideBar = !this.sideBar; }

  deleteAnswer(){ this.action.deleteAnswer(); }

}
