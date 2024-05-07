import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { FormsModule } from '@angular/forms';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MayorMenorComponent,
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class JuegosModule { }