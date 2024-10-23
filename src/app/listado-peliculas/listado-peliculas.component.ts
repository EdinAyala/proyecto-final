
import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {
  
  peliculas:Pelicula [] = [
    { titulo: 'Inception', director: 'Christopher Nolan', anio: 2010, genero: 'Ciencia Ficción', duracion: 148, sinopsis: 'Un ladrón que roba secretos a través de los sueños.' },
    { titulo: 'The Godfather', director: 'Francis Ford Coppola', anio: 1972, genero: 'Crimen', duracion: 175, sinopsis: 'La historia de la familia mafiosa Corleone.' },
    { titulo: 'Pulp Fiction', director: 'Quentin Tarantino', anio: 1994, genero: 'Crimen', duracion: 154, sinopsis: 'Varios relatos entrelazados de criminales en Los Ángeles.' }
  ];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculasService.getPeliculas();
  }

  eliminarPelicula(index: number): void {
    this.peliculasService.eliminarPelicula(index);
  }
}