import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remplazaEspacioPorPiso'
})
export class RemplazaEspacioPorPisoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    // convierto la cadena en array, separandola por espacios en blanco, y luego la convierto en string con el _ como separador
    return value.split(' ').join('_');
  }

}
