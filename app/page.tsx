"use client";

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard'; 
import projects from '@/data/projects.json';

export default function Home() {
  // 1. Creamos el estado para saber qué pestaña está activa (por defecto "Todo")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todo");

  // 2. Extraemos dinámicamente las categorías únicas de tu JSON
  const categorias = ["Todo", ...Array.from(new Set(projects.map((p) => p.categoria)))];

  // 3. Filtramos los proyectos antes de pintarlos
  const proyectosFiltrados = categoriaSeleccionada === "Todo" 
    ? projects 
    : projects.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-100 p-6 md:p-16 selection:bg-cyan-500 selection:text-black font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-8 border-b border-[#1e1e22] pb-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            Proyectos y Repositorios
          </h1>
          <p className="mt-4 text-gray-400 font-mono text-sm">
            &gt; Catálogo de proyectos y retos técnicos.
          </p>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 border-b border-[#1e1e22]">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSeleccionada(categoria)}
              className={`pb-3 text-lg font-medium transition-colors relative ${
                categoriaSeleccionada === categoria
                  ? "text-cyan-400"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {categoria}
              {/* Línea indicadora inferior para la pestaña activa */}
              {categoriaSeleccionada === categoria && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-cyan-400"></span>
              )}
            </button>
          ))}
        </div>

        {/* CUADRÍCULA DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <ProjectCard key={proyecto.id} project={proyecto} />
          ))}
        </div>

      </div>
    </main>
  );
}