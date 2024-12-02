export interface Pelicula {
  id?: string; // ID opcional para manejar las operaciones
  titulo: string;
  director: string;
  anio: number;
  genero: string;
  duracion: number;
  sinopsis: string;
  imagenUrl?: string; // URL de la imagen opcional
}
