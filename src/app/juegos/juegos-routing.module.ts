import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuardsService } from '../guards/auth-guards.service';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';

const routes: Routes = [
  { 
    path:'ahorcado', 
    component: AhorcadoComponent,
    // canActivate: [AuthGuardsService] 
  },
  { 
    path:'mayorMenor', 
    component: MayorMenorComponent,
    // canActivate: [AuthGuardsService] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }