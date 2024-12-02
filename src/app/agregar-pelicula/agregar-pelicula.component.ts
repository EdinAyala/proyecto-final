import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasService } from '../peliculas.service';
import { AlertService } from '../alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-pelicula',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent { 
  peliculaForm: FormGroup; 
  selectedFile: File | null = null;
   constructor( 
    private fb: FormBuilder,
     private peliculasService: PeliculasService,
      private alertService: AlertService 
    ) { 
      this.peliculaForm = this.fb.group({ 
        titulo: [''],
         director: [''],
          anio: [0],
           genero: [''],
            duracion: [0], 
            sinopsis: [''],
             imagenUrl: [''] 
            }); 
          } 
          onFileSelected(event: any): void {
             const file = event.target.files[0]; 
             this.peliculaForm.patchValue({ imagenUrl: URL.createObjectURL(file) });
              this.selectedFile = file;
             } 
             agregarPelicula(): void {
               if (this.peliculaForm.valid) {
                 this.peliculasService.agregarPelicula(this.peliculaForm.value).subscribe(() => {
                   this.alertService.success('Película agregada con éxito!'); 
                   this.peliculaForm.reset(); this.selectedFile = null;
                   }, error => {
                     this.alertService.error('Error al agregar la película.'); 
                    }); 
                  }
                 }
               }

