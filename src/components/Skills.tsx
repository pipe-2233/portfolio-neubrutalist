const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      color: "bg-neubrutalist-blue",
      textColor: "text-neubrutalist-white",
      shadowColor: "shadow-brutal-blue",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "CSS", level: 88 },
        { name: "Vite", level: 85 },
        { name: "Angular", level: 75 },
        { name: "HTML", level: 95 }
      ]
    },
    {
      title: "BACKEND & IoT",
      color: "bg-neubrutalist-red",
      textColor: "text-neubrutalist-white",
      shadowColor: "shadow-brutal-red",
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "OpenCV", level: 85 },
        { name: "MQTT", level: 90 },
        { name: "Pandas", level: 80 },
        { name: "Databases", level: 75 }
      ]
    },
    {
      title: "HERRAMIENTAS",
      color: "bg-neubrutalist-orange",
      textColor: "text-neubrutalist-black",
      shadowColor: "shadow-brutal-orange",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Raspberry Pi", level: 85 },
        { name: "Node-RED", level: 80 },
        { name: "Grafana", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-brutal bg-neubrutalist-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-neubrutalist-lime border-brutal border-neubrutalist-black shadow-brutal-lime transform rotate-12 opacity-70"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-neubrutalist-pink border-brutal border-neubrutalist-black shadow-brutal-pink transform -rotate-12 opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-neubrutalist-yellow border-brutal border-neubrutalist-black shadow-brutal opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="heading-brutal text-center text-neubrutalist-black mb-16">
          MIS HABILIDADES
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`card-brutal ${category.color} transform hover:scale-105 transition-all duration-300`}
            >
              <h3 className={`text-brutal-lg font-brutal ${category.textColor} mb-8 text-center`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-brutal ${category.textColor}`}>
                        {skill.name}
                      </span>
                      <span className={`font-brutal ${category.textColor} text-sm`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-4 bg-neubrutalist-black border-2 border-neubrutalist-black">
                        <div
                          className="h-full bg-neubrutalist-white transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="text-center">
          <h3 className="text-brutal-md font-brutal text-neubrutalist-black mb-8">
            TAMBIÉN TRABAJO CON
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Ruby", "Ollama", "InfluxDB", "Mosquitto", "Electronics", 
              "Automation", "Firebase", "REST APIs", "Express", "TypeScript"
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-neubrutalist-purple text-neubrutalist-white px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal font-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-brutal bg-neubrutalist-yellow max-w-2xl mx-auto">
            <h3 className="text-brutal-lg font-brutal text-neubrutalist-black mb-4">
              ¿NECESITAS ESTAS HABILIDADES?
            </h3>
            <p className="text-lg font-brutal text-neubrutalist-black mb-6">
              Estoy disponible para proyectos freelance y colaboraciones.
            </p>
            <a
              href="#contact"
              className="btn-brutal bg-neubrutalist-black text-neubrutalist-white shadow-brutal"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              TRABAJEMOS JUNTOS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
