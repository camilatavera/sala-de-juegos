import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RouterModule } from '@angular/router'; // importo RouterModule




import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    QuienSoyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule, // Agrego RouterModule
    AppRoutingModule,// importo rutas definidas aca

    
    provideFirebaseApp(() => initializeApp({"projectId":"sala-de-juegos-b232b","appId":"1:1028974691964:web:e73dbb99104fb8324c2bf9","storageBucket":"sala-de-juegos-b232b.appspot.com","apiKey":"AIzaSyCfxp3SKOfMxhfm1XMdBUSIypiuxKxKmS0","authDomain":"sala-de-juegos-b232b.firebaseapp.com","messagingSenderId":"1028974691964"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }