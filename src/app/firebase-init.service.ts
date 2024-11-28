import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseInitService {
  constructor() {
    this.initializeFirebase();
  }

  private initializeFirebase() {
    firebase.initializeApp({
      apiKey: "AIzaSyB7V2l7iJteTqM3Gy7SQWU0Wy5gZ1fukxE",
      authDomain: "edin-ayala-ing-b7a2a.firebaseapp.com"
    });
  }
}