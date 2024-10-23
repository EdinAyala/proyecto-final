import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula.model'; // Asegúrate de crear este modelo

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
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

  constructor() { }

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  agregarPelicula(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
  }

  eliminarPelicula(index: number): void {
    this.peliculas.splice(index, 1);
  }
}
