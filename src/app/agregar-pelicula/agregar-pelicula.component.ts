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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 32d5d18 (Añadiendo login)
export class AgregarPeliculaComponent {
   peliculaForm: FormGroup;
    selectedFile: File | null = null;
     imagenUrl: string | ArrayBuffer | null = null; 
     constructor(
       private fb: FormBuilder,
        private peliculasService: PeliculasService,
         private alertService: AlertService
         ) 
         { 
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
                    if (file) {
                       const reader = new FileReader();
                        reader.onload = () => {
                           this.imagenUrl = reader.result;
                            this.peliculaForm.patchValue({ imagenUrl: reader.result });
                           };
                            reader.readAsDataURL(file); this.selectedFile = file; 
                          } 
                        } 
                        agregarPelicula(): void {
                           if (this.peliculaForm.valid) { 
                            this.peliculasService.agregarPelicula(this.peliculaForm.value).subscribe(() => {
                               this.alertService.success('Película agregada con éxito!'); 
                               this.peliculaForm.reset(); this.selectedFile = null;
                                this.imagenUrl = null;
                               }, error => {
                                 this.alertService.error('Error al agregar la película.'); 
                                });
                               } 
                              } 
                            }
                              
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a2bdd09 (Actualizando proyecto)
=======
>>>>>>> 32d5d18 (Añadiendo login)




<<<<<<< HEAD
=======
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
>>>>>>> c6e59afdf7e653dd36d586b2d7b6d1ece227e1b0
<<<<<<< HEAD
=======
=======




>>>>>>> a5f6180 (Actualizando el proyecto)
>>>>>>> a2bdd09 (Actualizando proyecto)
=======
>>>>>>> 32d5d18 (Añadiendo login)

