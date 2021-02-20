import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightTextPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (!args) {
      return value;
    }

    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class='text-light bg-dark'>${match[0]}</span>`);
  }
}
