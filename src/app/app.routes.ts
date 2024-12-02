
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listado', component: ListadoPeliculasComponent }, 
  { path: 'agregar', component: AgregarPeliculaComponent }, 
  { path: 'editar/:id', component: EditarPeliculaComponent }
];


