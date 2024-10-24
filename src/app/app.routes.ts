import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

export const routes: Routes = [
  { path: "", component:ListadoPeliculasComponent },
  { path: "home", component: HomeComponent },
  { path: "agregar", component: AgregarPeliculaComponent },
  { path: "listado", component: ListadoPeliculasComponent }
];


