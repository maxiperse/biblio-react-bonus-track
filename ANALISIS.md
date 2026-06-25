# Análisis de elementos de React para el catálogo digital

| Elemento de React | ¿Dónde lo usas en este problema? | ¿Por qué es el adecuado? |
| --- | --- | --- |
| Componente | Uso `LibroCard`, `ListaLibros`, `FiltroEstado` y `BuscadorTitulo` para separar lo que deben hacer. | Los componentes permiten crear y ordenar, cada una con su propia lógica y funcion |
| JSX | Todos los componentes usan JSX para construir la interfaz de usuario declarativa. | JSX porque permite escribir estructura HTML en React y mezclarlo con JavaScript. |
| Props | `LibroCard` recibe `titulo`, `editorial`, `anio`, `estado`, `resumen`, `autores` y `esNovedad` desde `ListaLibros`. | Props son adecuados para transmitir datos de componente, manteniendo la informacion clara. |
| Estado (useState) | En `App.jsx` uso `useState` para el filtro seleccionado y el término de búsqueda. | El estado permite que responda a la interacción del usuario, actualizando el catálogo en tiempo real. |
| Renderizado de listas (.map + key) | `ListaLibros` recorre el array de libros con `.map` y usa `key={libro.id}`. | Es la forma estándar de renderizar colecciones en React y `key` ayuda a React a identificar elementos únicos para actualizaciones. |
| Renderizado condicional | En `App.jsx` muestro un mensaje cuando no hay libros filtrados, y en `LibroCard` el badge de novedad solo aparece si `esNovedad` es true. | Permite controlar qué se muestra según el estado de la app, mejorando la experiencia de la persona que este usando la pagina. |

## Respuestas breves

1. Dividirlo en componentes hace el código más fácil de leer y probar. Cada componente es responsable de una sola parte de la app, por lo que los cambios en el filtro, en la tarjeta de libro o en la lista no afectan todo el archivo.

2. En mi solución, `props` son datos que un componente recibe, como `LibroCard` recibiendo los del libro. El `estado` es información interna que puede cambiar con la interacción de la persona con la pagina, como `filtroEstado` y `busqueda` en `App.jsx`.
