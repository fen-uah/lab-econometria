# Laboratorio de Econometría — FEN UAH

Repositorio del sitio web de los cursos de Econometría de la **Facultad de Economía y Negocios de la Universidad Alberto Hurtado (UAH)**. Reúne bases de datos, material de estudio en R y los proyectos aplicados de los estudiantes de Ingeniería Comercial.

**Sitio publicado:** <https://fen-uah.github.io/lab-econometria/>

## Contenido del sitio

- **Datos:** bases de datos principales y secundarias para los proyectos.
- **Material de Estudio:** laboratorios en R para dos cursos:
  - *Econometría*, mención Economía (`labs_eco/`)
  - *Econometría para la Gestión*, mención Administración (`labs_epg/`)
- **Proyectos:** informes y presentaciones de los proyectos de los estudiantes.

## Estructura del repositorio

| Ruta | Contenido |
|------|-----------|
| `_quarto.yml` | Configuración del sitio (menú, páginas, formato) |
| `index.qmd` | Página de inicio y presentación de los docentes |
| `datos.qmd`, `data_principal.qmd`, `data_secundaria.qmd` | Sección Datos |
| `codigos.qmd`, `eco_eco*.qmd`, `eco_epg*.qmd` | Sección Material de Estudio |
| `proyectos.qmd` | Sección Proyectos |
| `labs_eco/` | Laboratorios del curso mención Economía (`.qmd`) |
| `labs_epg/` | Laboratorios del curso mención Administración y capítulos en PDF |
| `data/` | Archivos de datos (`bases_datos.xlsx`) |
| `pdf_pro_eco/` | Informes y presentaciones de proyectos de estudiantes |
| `uploads/` | Archivos subidos automáticamente por estudiantes |
| `img/`, `styles.css`, `open_links_newtab.js` | Imágenes, estilos y scripts del sitio |
| `_site/` | Sitio generado por Quarto (no editar a mano) |
| `.github/workflows/` | Flujos de GitHub Actions para recibir subidas de proyectos |

## Cómo editar y publicar el sitio

Requisitos: [R](https://www.r-project.org/), [RStudio](https://posit.co/download/rstudio-desktop/) y [Quarto](https://quarto.org/).

1. Abrir `proyecto.Rproj` en RStudio.
2. Editar los archivos `.qmd` correspondientes.
3. Previsualizar el sitio:
   ```bash
   quarto preview
   ```
4. Generar el sitio:
   ```bash
   quarto render
   ```
5. Publicar en GitHub Pages (rama `gh-pages`):
   ```bash
   quarto publish gh-pages
   ```
6. Guardar los cambios en el repositorio:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```

Para agregar una página nueva, crear el archivo `.qmd` y añadirlo a la lista `render` y al menú `navbar` en `_quarto.yml`.

## Equipo

**Docentes**

- Rocío Valdebenito
- Fernando Crespo
- Rodrigo Ortiz

**Ayudantes**

- Amador Marin Torres
- Manuel Labraña Rojas

---

© 2025 FEN-UAH · Sitio desarrollado con [Quarto](https://quarto.org/)
