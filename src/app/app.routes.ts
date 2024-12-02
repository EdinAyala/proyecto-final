
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
<<<<<<< HEAD
<<<<<<< HEAD

export const routes: Routes = [
=======
=======
>>>>>>> 32d5d18 (Añadiendo login)
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a2bdd09 (Actualizando proyecto)
  { path: 'home', component: HomeComponent },
  { path: 'listado', component: ListadoPeliculasComponent }, 
  { path: 'agregar', component: AgregarPeliculaComponent }, 
  { path: 'editar/:id', component: EditarPeliculaComponent }
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 32d5d18 (Añadiendo login)
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'listado', component: ListadoPeliculasComponent, canActivate: [AuthGuard] },
{ path: 'agregar', component: AgregarPeliculaComponent, canActivate: [AuthGuard] },
{ path: 'editar/:id', component: EditarPeliculaComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent }, 
{ path: 'registro', component: RegisterComponent }, 
{ path: '**', redirectTo: '/login'} 
<<<<<<< HEAD
>>>>>>> a5f6180 (Actualizando el proyecto)
>>>>>>> a2bdd09 (Actualizando proyecto)
=======
>>>>>>> 32d5d18 (Añadiendo login)
];


