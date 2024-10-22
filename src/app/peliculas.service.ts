import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula.model'; // Asegúrate de crear este modelo

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [];

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
