
/*import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';


export const routes: Routes = [ 
{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir al login sin canActivate
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent, canActivate: [LoginGuardian] },
{ path: 'listado', component: ListadoPeliculasComponent, canActivate: [LoginGuardian] },
{ path: 'agregar', component: AgregarPeliculaComponent, canActivate: [LoginGuardian] },
{ path: 'editar/:id', component: EditarPeliculaComponent, canActivate: [ LoginGuardian] },
{ path: '**', component: ListadoPeliculasComponent } // Sin redirectTo en la ruta comodín 
];*/

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { LoginComponent } from './login/login.component'; import { LoginGuardian } from './login/login-guardian';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [ 
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir al home si ya está autenticado
{ path: 'login', component: LoginComponent }, 
{ path: 'home', component: HomeComponent, canActivate: [LoginGuardian] },
{ path: 'listado', component: ListadoPeliculasComponent, canActivate: [LoginGuardian] },
{ path: 'agregar', component: AgregarPeliculaComponent, canActivate: [LoginGuardian] },
{ path: 'editar/:id', component: EditarPeliculaComponent, canActivate: [ LoginGuardian] },
{ path: 'inicio', component: HomeComponent, canActivate: [LoginGuardian] },
{ path: 'quienes-somos', component: QuienesSomosComponent, canActivate: [LoginGuardian] },
{ path: 'contacto', component: ContactoComponent, canActivate: [LoginGuardian] },
{ path: 'navbar', component: NavbarComponent, canActivate: [LoginGuardian] },
{ path: 'footer', component: FooterComponent, canActivate: [LoginGuardian] },
{ path: '**', component: ListadoPeliculasComponent } // Sin redirectTo en la ruta comodín 
];