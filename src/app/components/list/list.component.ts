import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  encuestas: any[];

  constructor(private action: ActionsService, private ruta: Router) { }

  ngOnInit(): void {
    this.encuestas = this.action.getEncuestas();
  }

  edit(id){
    this.ruta.navigate(['/dashboard/edit', id]);
  }

  result(id){
    this.ruta.navigate(['/dashboard/result', id]);
  }

}
