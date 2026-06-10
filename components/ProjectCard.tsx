import React from "react";
import Link from 'next/link';

interface ProjectProps {
  project: {
    id: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    enlace: string;
    categoria: string;
  };
}


export default function ProjectCard({project}: ProjectProps) {
    return (
        <div className="bg-[#121214] border border-[#29292e] rounded-xl p-6 font-mono shadow-xl hover:border-cyan-500/5xl transition-all duration-300 group flex flex-col justify-between h-full">
            <div>
                {/* Cabecera estilo pestaña de editor */}
                <div className="flex justify-between items-center mb-4 border-b border-[#29292e] pb-2 text-xs text-gray-500">
                    <span>{project.categoria.toLowerCase()}.json</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                </div>

                {/* Título del Proyecto */}
                <Link href={`/proyecto/${project.id}`}>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-cyan-400 transition-colors cursor-pointer">
                        {project.titulo}
                    </h3>
                </Link>

                <p className="text-sm text-gray-400 font-sans mb-6 line-clamp-3">
                    {project.descripcion}
                </p>

                {/* Bloque de código simulado */}
                <div className="bg-[#09090a] rounded-lg p-4 text-xs md:text-sm border border-[#1e1e22] text-gray-300 overflow-x-auto">
                    <div className="text-yellow-500 font-bold mb-1">
                        .{project.id} <span className="text-purple-400">{"{"}</span>
                    </div>
          
                    {/* Mapeo de tecnologías emulando propiedades CSS */}
                    <div className="pl-4 space-y-1">
                        <div>
                            <span className="text-blue-400">stack</span>:{" "}
                            <span className="text-green-400">
                                {project.tecnologias.join(', ')}
                            </span>;
                        </div>
                        
                        {project.enlace && (
                            <div className="mt-2">
                                <span className="text-purple-400">a</span>:{" "}
                                <span className="text-cyan-400">url</span>
                                <span className="text-gray-400">(</span>
                                <a 
                                    href={project.enlace} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 underline hover:text-cyan-300 break-all"
                                >
                                    '{project.enlace}'
                                </a>
                                <span className="text-gray-400">)</span>;
                            </div>
                        )}
                    </div>
          
                    <div className="text-purple-400 mt-1">{"}"}</div>
                </div>
            </div>

            {/* Botón de acción inferior si tiene enlace */}
            <div className="mt-4 pt-4 border-t border-[#1e1e22] flex justify-end">
                <Link
                    href={`/proyecto/${project.id}`}
                    className="text-xs bg-[#1e1e22] hover:bg-cyan-500 hover:text-black text-gray-300 font-sans font-medium py-2 px-4 rounded-md transition-all flex items-center gap-1"
                >
                    Ver detalles <span>→</span>
                </Link>
            </div>
        </div>
    );
}