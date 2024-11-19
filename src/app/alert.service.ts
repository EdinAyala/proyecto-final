import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message: string, title: string = 'Éxito') {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  error(message: string, title: string = 'Error') {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  confirm(title: string, text: string, confirmButtonText: string = 'Sí', cancelButtonText: string = 'No') {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }
}
