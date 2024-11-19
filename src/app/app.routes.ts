
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';

export const routes: Routes = [
  { path: '', component: ListadoPeliculasComponent }, 
  { path: 'agregar', component: AgregarPeliculaComponent }, 
  { path: 'editar/:id', component: EditarPeliculaComponent }
];


