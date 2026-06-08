import React from 'react';
import Link from 'next/link';
import projects from '../../../data/projects.json';

// 1. Añadimos 'async' a la función y tipamos 'params' como una Promesa
export default async function ProyectoDetalle({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Usamos 'await' para desenvolver la promesa y obtener el ID real de la URL
  const { id } = await params;

  // 3. Ahora sí, buscamos el proyecto usando el ID correcto
  const proyecto = projects.find((p) => p.id === id);

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] text-white">
        <h1 className="text-2xl">Proyecto no encontrado</h1>
        <Link href="/" className="ml-4 text-cyan-400 hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-100 p-6 md:p-16 selection:bg-cyan-500 selection:text-black font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO SUPERIOR */}
        <div className="mb-12 border-b border-[#1e1e22] pb-8">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-cyan-400 font-mono text-sm mb-6 transition-colors">
            <span className="mr-2">&lt;-</span> cd .. /proyectos
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#1e1e22] text-cyan-400 text-xs font-mono px-3 py-1 rounded-full border border-[#29292e]">
              {proyecto.categoria}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {proyecto.titulo}
          </h1>
        </div>

        {/* CUERPO DEL PROYECTO (Layout 2/3 y 1/3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUMNA PRINCIPAL (Izquierda - Explicación técnica) */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-l-2 border-cyan-500 pl-3">
                Resumen
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg text-justify">
                {proyecto.descripcion}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-l-2 border-cyan-500 pl-3">
                Sobre el Proyecto
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4 text-justify">
                <p>
                  {proyecto.descripcion_detallada 
                    ? proyecto.descripcion_detallada 
                    : "Descripción detallada en proceso de documentación."}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-l-2 border-cyan-500 pl-3">
                Reto Técnico & Solución
              </h2>
              <div className="bg-[#121214] border border-[#29292e] rounded-lg p-6 text-gray-400 leading-relaxed text-justify">
                <p>
                  {proyecto.reto_tecnico 
                    ? proyecto.reto_tecnico 
                    : "Detalles técnicos en proceso de redacción."}
                </p>
              </div>
            </section>
          </div>

          {/* SIDEBAR (Derecha - Detalles y Links) */}
          <div className="space-y-6">
            <div className="bg-[#09090a] border border-[#1e1e22] rounded-xl p-6 shadow-lg">
              <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="bg-[#1e1e22] text-gray-300 text-xs px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                Repositorio
              </h3>
              {proyecto.enlace ? (
                <a 
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-cyan-400 font-bold py-3 px-4 rounded-md transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Ver Código Fuente
                </a>
              ) : (
                <div className="w-full text-center bg-[#1e1e22] text-gray-500 font-medium py-3 px-4 rounded-md border border-[#29292e] cursor-not-allowed">
                  Código Privado
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}