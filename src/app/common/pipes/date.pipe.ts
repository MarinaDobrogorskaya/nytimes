import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
/**
 * This pipe transform string date from '1989-01-15T00:00:00Z' to '1989-01-15'
 */
export class DatePipe implements PipeTransform {
  transform(value: string): string {
    const separator = value.indexOf('T');
    return value.slice(0, separator);
  }

}
