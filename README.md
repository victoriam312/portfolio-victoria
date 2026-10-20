# Portfolio · Victoria Martín

**🌐 Ver la web:** https://portfolio-victoria-beta.vercel.app

Web personal donde reúno mis proyectos de desarrollo: aplicaciones multiplataforma, backend en Java, apps Android y web.

Cada proyecto tiene su ficha con descripción, el reto técnico que resolví, las tecnologías usadas y el enlace a su repositorio.

## Proyectos incluidos

| Proyecto | Categoría | Tecnologías principales |
|---|---|---|
| [HostFix](https://github.com/victoriam312/HostFix) | App multiplataforma | Kotlin Multiplatform, Compose, SQL Server, jBCrypt |
| [Procesador de Contratos XML](https://github.com/victoriam312/Procesador_contratos_xml_java) | Backend | Java, SAX/DOM, MySQL, JDBC |
| [Concesionario Multihilo](https://github.com/victoriam312/ConcesionarioMultihilo) | Backend | Java, hilos, semáforos |
| [SmartOcupation](https://github.com/victoriam312/SmartOcupation-JavaSwing) | Escritorio | Java Swing, MVC/DAO, MySQL, JUnit 5 |
| [Conversor de Unidades](https://github.com/victoriam312/Conversor-Unidades-Android) | Mobile | Java, Android |
| [Core JDBC Base Connection](https://github.com/victoriam312/Java-jdbc-basic-connection) | Backend | Java, JDBC, Maven |
| [Wordle CLI](https://github.com/victoriam312/Java_console_Wordle) | Consola | Java, POO, ficheros |
| [Gym Store Landing Page](https://github.com/victoriam312/Gym_Store_Landing_Page) | Web | HTML5, CSS3 |

## Cómo está hecho

- **Next.js** (App Router) con **TypeScript** y **React**
- **Tailwind CSS** para los estilos
- Contenido en `data/projects.json`: añadir un proyecto es añadir una entrada, sin tocar componentes
- Filtro por categoría en la portada, calculado a partir de los propios datos
- Página de detalle por proyecto en `app/proyecto/[id]`

```
app/
  page.tsx               portada con el catálogo y el filtro
  proyecto/[id]/page.tsx ficha de cada proyecto
components/
  ProjectCard.tsx        tarjeta de proyecto
data/
  projects.json          contenido de los proyectos
lib/
  github.ts              carga experimental desde la API de GitHub (repos con el topic "portfolio")
```

## Ejecutarlo en local

```bash
npm install
npm run dev
```

Y abrir http://localhost:3000.

La versión publicada se despliega automáticamente en Vercel con cada cambio en `main`.

`lib/github.ts` necesita un token en la variable `GITHUB_TOKEN` (en `.env.local`, que no se sube al repo). La web no lo usa todavía.

## Contacto

- Web: https://portfolio-victoria-beta.vercel.app
- CV: https://portfolio-victoria-beta.vercel.app/CV_Victoria_Martin_Marin.pdf
- LinkedIn: [Victoria Martín Marín](https://www.linkedin.com/in/victoria-martin-marin)
- GitHub: [@victoriam312](https://github.com/victoriam312)
