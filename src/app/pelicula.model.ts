export class Pelicula {
  constructor(
    public id: string,
    public titulo: string,
    public director: string,
    public anio: number,
    public genero: string,
    public duracion: number,
    public sinopsis: string
  ) {}
}
