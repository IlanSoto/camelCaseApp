# camelCaseApp

Esta es una aplicación simple de Angular que demuestra el uso de un Pipe personalizado para transformar texto a camelCase.

## Pipe CamelCase

El Pipe `camelCase` toma una cadena de texto y la convierte a formato camelCase. Cada palabra dentro del texto se capitaliza, excepto la primera.

### Uso en la Aplicación

El Pipe `camelCase` está integrado en la plantilla del componente `AppComponent`. Aquí se muestra cómo se usa en un array de textos:

```html
<ul>
  <li *ngFor="let text of texts">
    {{ text | camelCase }}
  </li>
</ul>

Ejemplo
Si el array texts contiene ['hello world', 'angular pipe example', 'custom camelCase'], la salida será:

hello world → helloWorld
angular pipe example → angularPipeExample
custom camelCase → customCamelCase