import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultaClave'
})
export class OcultaClavePipe implements PipeTransform {

  transform(password: any, action: boolean = false): any {
    if (action) {
      return password.split('').map((letra) => '*').join('');
    }
    return password;
  }

}
