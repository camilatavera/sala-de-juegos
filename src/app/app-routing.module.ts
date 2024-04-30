import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';


export const routes: Routes = [
  { 
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path:'home', 
    component: HomeComponent,
    // canActivate: [AuthGuardsService]
  },
  { 
    path:'login', 
    component: LoginComponent,
  },
  { 
    path:'quienSoy', 
    component: QuienSoyComponent 
  },
  { 
    path:'registro', 
    component: RegistroComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }