/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"carenginelookup","appId":"1:157315191715:web:4ae7236f28fa3df79c8016","storageBucket":"carenginelookup.appspot.com","apiKey":"AIzaSyDt0SwFDeOnF8h_TRlYKbr_NWvZZ9nqzG8","authDomain":"carenginelookup.firebaseapp.com","messagingSenderId":"157315191715"})), provideFirestore(() => getFirestore())]
}).catch(err => console.error(err));