import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peliculas-app'; // Puedes cambiar el título según lo necesites
}