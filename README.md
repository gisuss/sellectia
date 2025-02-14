# Sellectia
## _Prueba técnica_

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

La prueba consiste en la maquetación de una landing page a partir de un diseño proporcionado. La condición es que no se usen frameworks como tailwind css o bootstrap. Solo _HTML + SCSS + Javascript_.

## Actividades

- ✅ La maquetación debe ser responsive.
- ✅ Uso correcto de etiquetas semánticas.
- ✅ Código bien estructurado y organizado.
- ✅ implementación de un carrusel de imágenes con [Swiper].
- ✅ Uso de JavaScript para mostrar un mensaje de agradecimiento visual al pulsar el botón "Enviar mensaje" (no es necesario que el formulario realice un envío real).
- ✅ Inclusión de animaciones con CSS o mediante la librería [AOS] o similar.
- ✅ Un archivo explicando la estructura del proyecto y las decisiones de diseño tomadas.
- ✅ El código completo del proyecto debe subirse a un [repositorio] en GitHub o similar.

Siempre me gusta iniciar con alguna frase célebre 

> El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.  - Albert Schweitzer

## Fase de análisis

En esta fase lo primero que hice fue optimizar todas los recursos proporcionados y para ello empleé la herramienta [Squoosh] la cual es una de las herramientas top cuando se trata de optimizar imagenes. Decidí optimizarlas a .webp por experiencias previas.

Acto seguido, procedí a crear el proyecto y ahora toca elegir la estructura de directorios mas adecuada para este proyecto ya que no estoy usando un framework. La estructura que usé es la más práctica y escalable para este tipo de proyectos que no usan un framework en su estructuración. Cabe mencionar que usé la tutoría de [Midudev] en uno de sus videos en su canal de Youtube.

```sh
assets/
└── images/
    └── logos/
        └── ...
    └── portada/
        └── ...
    └── servicios/
        └── ...
js/
    └── main.js
scss/
    └── styles.css
    └── styles.map.css
    └── styles.scss
index.html
README.md
```

Lo siguiente fue crear el [repositorio] en Github, inicializar git y posteriormente en cuanto tuviese algo estructurado subirlo al repositorio. La secuencia de comandos utilizada fue la siguiente:

```sh
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/gisuss/sellectia.git
git push -u origin main
```

Lo siguiente fue subir esta primera versión del proyecto a [Vercel] lo cual generó el siguiente enlace del proyecto en [produccion].

## Decisiones de diseño tomadas y herramientas utilizadas

Durante la maquetación del proyecto surgieron diversos casos especiales los cuales resumiré en la siguiente tabla:

| Item | Descripción |
| ------ | ------ |
| Uso de ```grid``` y ```grid-template-areas``` | En gran parte del proyecto usé grid por sus bondades y prácticidad al momento de estructurar el responsive. |
| Carrusel | Mejora visual: en formato móvil, cambié la orientación de la cortina roja. |
| Swiper [autoplay-progress] | Decidí emplear este carrusel [autoplay-progress] por su diseño único y amigable. |
| [AOS] | Decidí usar esta librería para las animaciones por su simple integración mediante CDN y efectos suaves y livianos. |
| [SweetAlert] | Decidí usar esta librería porque es la más popular y sencilla de integrar. |
| [Squoosh] | Excelente web para optimización de imagenes. |

## Validaciones de formulario

Las validaciones de formulario aplicadas en este proyecto son las siguientes. Orientadas hacia aumentar la experiencia de usuario y la congruencia de la data enviada a través del formulario.

| Campo (input) | Descripción |
| ------ | ------ |
| Nombre | Validación en tiempo real para que no permita ingresar números ni caracteres especiales mientras el usuario escribe. |
| Email | Validación de formato válido. |
| Teléfono | Solo valores numéricos de teléfonos válidos. |
| Planeta de nacimiento | Empleé el uso de datalist con los nombres de los planetas del sistema solar. Esto mejora la experiencia del usuario. |

## Autor
[![Contribuidores](https://contrib.rocks/image?repo=gisuss/sellectia&max=500&columns=20)](https://github.com/gisuss/sellectia/graphs/contributors)

## License

**Free Software, Hell Yeah!**

[//]: #

   [gisuss]: <https://github.com/gisuss>
   [repositorio]: <https://github.com/gisuss/sellectia.git>
   [AOS]: <https://michalsnik.github.io/aos/>
   [Swiper]: <https://swiperjs.com>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Squoosh]: <https://squoosh.app>
   [Midudev]: <https://www.youtube.com/shorts/4DP8mMUjWA8>
   [Vercel]: <https://vercel.com/gisuss-projects>
   [produccion]: <https://sellectia.vercel.app>
   [autoplay-progress]: <https://swiperjs.com/demos#autoplay-progress>
   [SweetAlert]: <https://sweetalert2.github.io>
