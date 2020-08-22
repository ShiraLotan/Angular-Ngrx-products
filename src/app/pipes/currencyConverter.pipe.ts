import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(price: number, curreny: number, choosen: number): any {
    debugger
    if (!choosen) {
      return price / curreny
    }
    return price;
  }

}
