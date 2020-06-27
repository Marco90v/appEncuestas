import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevaComponent } from './components/nueva/nueva.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/nueva/edit.component';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  {path: '', component: EncuestasComponent},
  {path: 'encuesta/:ID', component: EncuestaComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'new', component: NuevaComponent},
    {path: 'list', component: ListComponent},
    {path: 'edit/:ID', component: EditComponent},
    {path: 'result/:ID', component: ResultComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
