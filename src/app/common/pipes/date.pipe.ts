import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    const separator = value.indexOf('T');
    return value.slice(0, separator);
  }

}
