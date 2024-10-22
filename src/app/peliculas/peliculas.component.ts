import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Pelicula {
  titulo: string;
  director: string;
  anio: number;
  genero: string;
  duracion: number; // en minutos
  sinopsis: string;
}

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  peliculas: Pelicula[] = [
    {
      titulo: 'Inception',
      director: 'Christopher Nolan',
      anio: 2010,
      genero: 'Ciencia Ficción',
      duracion: 148,
      sinopsis: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de los sueños.'
    },
    {
      titulo: 'The Godfather',
      director: 'Francis Ford Coppola',
      anio: 1972,
      genero: 'Crimen',
      duracion: 175,
      sinopsis: 'La historia de la familia Corleone y su imperio criminal.'
    }
    // Agrega más películas según sea necesario
  ];
}





