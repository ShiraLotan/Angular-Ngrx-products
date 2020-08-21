import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CustomePipe implements PipeTransform {

  transform(price: number, curreny: number, choosen: number): any {
    if (!choosen) {
      return price / curreny
    }
    return price;
  }

}
