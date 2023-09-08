import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  shootSimpleAlert(icon: SweetAlertIcon, title: string, text?: string) {
    Swal.fire({
      position: 'center',
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: true,
      confirmButtonColor: '#84CE6A',
      confirmButtonText: 'Aceptar',
    });
  }
  
  async shootConfirmAlert(icon: SweetAlertIcon, title: string, text?: string) {
    return await Swal.fire({
      position: 'center',
      icon: icon,
      title: title,
      text: text,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#84CE6A",
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    });
  }

  async shootLoadingAlert() {
    await Swal.fire({
      title: 'Espere un momento...',
      html: 'Cargando',
      timerProgressBar: true,
      backdrop: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })
  }
}
