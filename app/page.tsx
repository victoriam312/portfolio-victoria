"use client"; 

import React, {useState} from "react";
import projects from '../data/projects.json';
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [filtro, setFiltro] = useState('Todo');

  const categorias = ['Todo', ...Array.from(new Set(projects.map(p => p.categoria)))];

  const proyectosFiltrados = filtro === 'Todo'
    ? projects
    : projects.filter(p => p.categoria === filtro);

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-100 p-6 md:p-16 selection:bg-cyan-500 selection:text-black">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <header className="mb-12 border-b border-[#1e1e22] pb-8">
          <h1 className="text-4xl font-black tracking-tight text-white font-sans sm:text-5xl uppercase">
            Proyectos
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-400 font-mono">
            // Catálogo de repositorios y proyectos técnicos
          </p>
        </header>

        {/* Menú de Navegación para Filtros */}
        <nav className="mb-10 flex flex-wrap justify-center gap-6 border-b border-[#1e1e22]">
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setFiltro(categoria)}
              className={`text-lg font-sans pb-4 relative transition-colors ${
                filtro === categoria 
                  ? 'text-cyan-400 font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {categoria}

              {filtro === categoria && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-t-md"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Grid Responsivo de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosFiltrados.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </main>
  );
}