import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula.model';
import { AlertService } from '../alert.service';
import { CommonModule } from '@angular/common';
import { AgregarPeliculaComponent } from '../agregar-pelicula/agregar-pelicula.component';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [AgregarPeliculaComponent,CommonModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  constructor( private peliculaService: PeliculasService, 
    private router: Router, private alertService: AlertService 
  ) {} 
  ngOnInit(): void {
     this.peliculaService.getPeliculas().subscribe(data => {
       this.peliculas = data; 
      }); 
    } 
    editarPelicula(id: string): void {
       this.router.navigate(['/editar', id]); 
      } 
      eliminarPelicula(id: string): void { 
        this.alertService.confirm('¿Estás seguro?', 'Esta acción eliminará la película.') .then(result => { 
          if (result.isConfirmed) { this.peliculaService.eliminarPelicula(id).subscribe(() => {
             this.alertService.success('Película eliminada con éxito!'); 
             this.ngOnInit();
             }, error => { this.alertService.error('Error al eliminar la película.');

              });
             } 
            }); 
          }
       }