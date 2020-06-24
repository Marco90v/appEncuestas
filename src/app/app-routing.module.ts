import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevaComponent } from './components/nueva/nueva.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'new', component: NuevaComponent},
    {path: 'list', component: NuevaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
