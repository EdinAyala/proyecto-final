import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> a5f6180 (Actualizando el proyecto)
>>>>>>> a2bdd09 (Actualizando proyecto)




@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,RouterLink],
=======
<<<<<<< HEAD
  imports: [RouterOutlet,RouterLink],
=======
  imports: [NavbarComponent,RouterOutlet,RouterLink],
>>>>>>> a5f6180 (Actualizando el proyecto)
>>>>>>> a2bdd09 (Actualizando proyecto)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peliculas-app'; // Puedes cambiar el título según lo necesites
}