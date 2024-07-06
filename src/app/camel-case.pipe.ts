import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Split the value into words
    const words = value.split(' ');

    // Convert each word to lowercase and capitalize the first letter
    const camelCaseWords = words.map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    // Join the words and return
    return camelCaseWords.join('');
  }
}
