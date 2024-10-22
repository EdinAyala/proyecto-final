
import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculasService.getPeliculas();
  }

  eliminarPelicula(index: number): void {
    this.peliculasService.eliminarPelicula(index);
  }
}