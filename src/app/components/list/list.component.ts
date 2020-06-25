import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  encuestas: any[];

  constructor(private action: ActionsService) { }

  ngOnInit(): void {
    this.encuestas = this.action.getEncuestas();
  }

}
