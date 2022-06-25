import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/events/detail/detail.component';
import { InscriptionComponent } from './components/events/inscription/inscription.component';
import { ListComponent } from './components/events/list/list.component';

const routes: Routes = [
  {path: '', redirectTo : '/list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component : DetailComponent},
  {path:'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
