import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getGithubProjects() {
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username: "victoriam312",
      sort: "updated",
      per_page: 100,
    });

    const portfolioRepos = repos.filter((repo) =>
      repo.topics?.includes("portfolio")
    );

    // Usamos Promise.all porque hacemos una petición extra por cada repositorio para leer su README
    const formattedProjects = await Promise.all(
      portfolioRepos.map(async (repo) => {
        let readmeText = "Documentación en proceso...";
        
        try {
          // Pedimos el archivo README.md a la API
          const { data: readme } = await octokit.repos.getReadme({
            owner: "victoriam312",
            repo: repo.name,
          });
          // Descodificamos el archivo de Base64 a texto normal
          readmeText = Buffer.from(readme.content, "base64").toString("utf8");
        } catch (e) {
          console.log(`No se encontró README para ${repo.name}`);
        }

        return {
          id: repo.name,
          titulo: repo.name.replace(/-/g, " ").toUpperCase(),
          descripcion: repo.description || "Descripción no disponible.",
          // Pasamos el README completo como descripción detallada
          descripcion_detallada: readmeText,
          reto_tecnico: readmeText,
          tecnologias: repo.topics?.filter(topic => topic !== "portfolio") || ["Code"],
          enlace: repo.html_url,
          categoria: repo.language || "Software",
        };
      })
    );

    return formattedProjects;
  } catch (error) {
    console.error("Error al cargar repositorios de GitHub:", error);
    return [];
  }
}