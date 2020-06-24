import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public sideBar = false;

  constructor() {}

  ngOnInit(): void {
  }

  abrirCerrar(){
    this.sideBar = !this.sideBar;
  }

}
