import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Pelicula } from './pelicula.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private dbPath = 'navidad';

  constructor(private dataService: DataService) {}

  getPeliculas() {
    return this.dataService.getCollection(this.dbPath).pipe(
      map((data: any) => {
        const peliculasArray: Pelicula[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            peliculasArray.push({ id: key, ...data[key] });
          }
        }
        return peliculasArray;
      })
    );
  }

  agregarPelicula(pelicula: Pelicula) {
    return this.dataService.addItem(this.dbPath, pelicula);
  }

  actualizarPelicula(id: string, pelicula: Pelicula) {
    return this.dataService.updateItem(this.dbPath, id, pelicula);
  }

  eliminarPelicula(id: string) {
    return this.dataService.deleteItem(this.dbPath, id);
  }
}

