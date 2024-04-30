import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { enviroment } from '../environmentConfig';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp(enviroment))), 
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideFirestore(() => getFirestore())), 
    importProvidersFrom(provideDatabase(() => getDatabase()))
]}