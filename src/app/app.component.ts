import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  video = 'csx53ZqoQqI';
  nombre = 'Josue Yoel Perez';
  clave = '123456';
  mostrar = false;
  observable = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3000);
  });
  fechaActual: Date = new Date();
  constructor() {
  }
}
