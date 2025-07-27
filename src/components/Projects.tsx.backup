const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SELECCIONADOR DE HUEVOS IoT",
      description: "Sistema de clasificación de huevos con Visión Artificial e IoT. Usa MQTT, Node-RED, Grafana e InfluxDB para monitoreo en tiempo real. Funciona en Raspberry Pi con sensores ultrasónicos.",
      technologies: ["Python", "OpenCV", "MQTT", "Node-RED", "Grafana", "IoT"],
      color: "bg-neubrutalist-blue",
      shadowColor: "shadow-brutal-blue",
      githubUrl: "https://github.com/pipe-2233/seleccionador_huevos",
      demoUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "FINANCIAL DASHBOARD",
      description: "Dashboard de análisis financiero en tiempo real con React, TypeScript y Chart.js. Incluye visualización de datos, seguimiento de portfolio y resumen del mercado.",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind"],
      color: "bg-neubrutalist-lime",
      shadowColor: "shadow-brutal-lime",
      githubUrl: "https://github.com/pipe-2233/financial-dashboardx",
      demoUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "PORTFOLIO NEUBRUTALIST",
      description: "Portafolio personal con diseño Neubrutalism, colores vibrantes y animaciones impactantes. Responsive y optimizado para performance.",
      technologies: ["React", "TypeScript", "Tailwind", "Vite"],
      color: "bg-neubrutalist-yellow",
      shadowColor: "shadow-brutal",
      githubUrl: "#",
      demoUrl: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-brutal bg-neubrutalist-lime relative overflow-hidden">
      {/* Background Elements */}
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
              className={`card-brutal ${project.color} transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
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
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-neubrutalist-black text-neubrutalist-white px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 font-brutal text-center"
                >
                  GITHUB
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-neubrutalist-white text-neubrutalist-black px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 font-brutal text-center"
                >
                  DEMO
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/pipe-2233"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal bg-neubrutalist-red text-neubrutalist-white shadow-brutal-red inline-block"
          >
            VER MÁS PROYECTOS EN GITHUB
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
