import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Weather Dashboard",
    description: "Una aplicación web interactiva para consultar datos meteorológicos en tiempo real con autocompletado inteligente de 150+ ciudades, datos completos (temperatura, humedad, viento, UV index), efectos glassmorphism, animaciones FLIP fluidas y gestión de hasta 4 ciudades simultáneamente. Incluye persistencia de datos y diseño responsivo moderno.",
    technologies: ["TypeScript", "Vite", "SCSS", "WeatherAPI", "Framer Motion", "Date-fns"],
    github: "https://github.com/pipe-2233/weather-dashboard",
    demo: "https://pipe-2233.github.io/-Weather-Dashboard/",
    featured: true
  },
  {
    id: 2,
    title: "Selector de Huevos IoT",
    description: "Sistema inteligente para clasificación automática de huevos usando visión por computadora y tecnologías IoT. Implementa algoritmos de machine learning para detectar calidad y tamaño.",
    technologies: ["Python", "OpenCV", "Arduino", "MQTT", "TensorFlow"],
    github: "https://github.com/pipe-2233/egg-selector-iot",
    demo: "https://youtube.com/demo-egg-selector"
  },
  {
    id: 3,
    title: "Dashboard Financiero",
    description: "Aplicación web para gestión de finanzas personales con gráficos interactivos, categorización de gastos y análisis de patrones de consumo.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    github: "https://github.com/pipe-2233/financial-dashboard",
    demo: "https://financial-dashboard-demo.netlify.app"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-brutal bg-neubrutalist-lime relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-neubrutalist-red border-brutal border-neubrutalist-black shadow-brutal-red transform rotate-45 opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-neubrutalist-purple border-brutal border-neubrutalist-black shadow-brutal transform -rotate-12 opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-neubrutalist-orange border-brutal border-neubrutalist-black shadow-brutal-orange transform rotate-12 opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="heading-brutal text-center text-neubrutalist-black mb-16">
          MIS PROYECTOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-brutal transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative"
            >
              {project.featured && (
                <div className="absolute -top-4 -right-4 bg-neubrutalist-red text-neubrutalist-white px-3 py-1 border-brutal border-neubrutalist-black shadow-brutal-red transform rotate-12">
                  <span className="text-sm font-brutal">DESTACADO</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-brutal-md font-brutal text-neubrutalist-black mb-4">
                  {project.title}
                </h3>
                <p className="text-base font-brutal text-neubrutalist-black leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neubrutalist-black text-neubrutalist-white px-3 py-1 border-2 border-neubrutalist-black font-brutal text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-neubrutalist-black text-neubrutalist-white px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 font-brutal text-center"
                >
                  CÓDIGO
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-neubrutalist-white text-neubrutalist-black px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 font-brutal text-center"
                  >
                    DEMO
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/pipe-2233"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal bg-neubrutalist-red text-neubrutalist-white shadow-brutal-red inline-block"
          >
            VER MÁS EN GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
