# Proyecto: ¿Qué es la Ética?

Este proyecto explora el concepto de ética a través de distintos recursos y ejemplos, desarrollado en Astro.

## Introducción

La ética es como un faro que nos guía en el camino de la vida, ayudándonos a distinguir entre lo correcto y lo incorrecto. Filósofos como Aristóteles, Kant y los utilitaristas han intentado comprender los dilemas éticos que enfrentamos todos los días. La ética no se queda solo en los libros, ¡se vive! Se forja en cada decisión que tomamos y en cada interacción que tenemos con los demás.

La psicología también nos ayuda a entender mejor la ética, investigando cómo nuestros pensamientos, sentimientos y el entorno social influyen en nuestras decisiones morales. Lawrence Kohlberg nos enseñó que el desarrollo moral es como un viaje que recorremos a lo largo de nuestra vida.

## Estructura del Proyecto

Dentro del proyecto, encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── Intro.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
Astro busca archivos .astro o .md en el directorio src/pages/ para exponer cada página como una ruta basada en su nombre de archivo. Los componentes se ubican en src/components/ y los recursos estáticos, como imágenes, en el directorio public/.
