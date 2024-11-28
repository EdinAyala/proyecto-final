import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasService } from '../peliculas.service';
import { AlertService } from '../alert.service';
import { Pelicula } from '../pelicula.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  peliculaId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculasService,
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

  ngOnInit() {
    this.peliculaId = this.route.snapshot.paramMap.get('id');
    if (this.peliculaId) {
      this.peliculaService.getPeliculas().subscribe(peliculas => {
        const pelicula = peliculas.find(p => p.id === this.peliculaId);
        if (pelicula) {
          this.peliculaForm.patchValue(pelicula);
        }
      });
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.peliculaForm.patchValue({ imagenUrl: URL.createObjectURL(file) });
  }

  actualizarPelicula(): void {
    if (this.peliculaForm.valid && this.peliculaId) {
      this.peliculaService.eliminarPelicula(this.peliculaId).subscribe(() => {
        this.peliculaService.agregarPelicula(this.peliculaForm.value).subscribe(() => {
          this.alertService.success('Película actualizada con éxito!');
          this.router.navigate(['/listado']);
        }, error => {
          this.alertService.error('Error al actualizar la película.');
        });
      }, error => {
        this.alertService.error('Error al eliminar la película anterior.');
      });
    }
  }
}
