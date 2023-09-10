import { Component } from '@angular/core';
import { arregloOriginal, nuevoArreglo } from './datos';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent {
  arregloOriginal = arregloOriginal;
  nuevoArreglo = nuevoArreglo;
}
