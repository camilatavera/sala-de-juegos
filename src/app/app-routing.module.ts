import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';


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
  },
  {
    path: 'juegos', 
    loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule)
  },
  { 
    path:'chat', 
    component: ChatComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }