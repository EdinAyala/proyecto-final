
import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-pelicula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent {
  nuevaPelicula: Pelicula = { titulo: '', director: '', anio: 0, genero: '', duracion: 0, sinopsis: '' };

  constructor(private peliculasService: PeliculasService) { }

  agregarPelicula(): void {
    this.peliculasService.agregarPelicula(this.nuevaPelicula);
    this.nuevaPelicula = { titulo: '', director: '', anio: 0, genero: '', duracion: 0, sinopsis: '' };
  }
}
