import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from './login/login.service';
import { FirebaseInitService } from './firebase-init.service'; // Importar el servicio de inicialización de Firebase
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private firebaseInitService: FirebaseInitService, private loginService: LoginService) {}

  ngOnInit(): void {
    // Firebase ya está inicializado en el constructor de FirebaseInitService
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }
}