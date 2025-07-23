const About = () => {
  return (
    <section id="about" className="section-brutal bg-neubrutalist-pink relative">
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-neubrutalist-yellow border-brutal border-neubrutalist-black shadow-brutal transform rotate-12 opacity-80"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-neubrutalist-blue border-brutal border-neubrutalist-black shadow-brutal-blue transform -rotate-6 opacity-80"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="heading-brutal text-center text-neubrutalist-white mb-16">
          SOBRE MÍ
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <div className="relative">
            <div className="card-brutal bg-neubrutalist-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square bg-neubrutalist-lime border-brutal border-neubrutalist-black shadow-brutal-lime flex items-center justify-center">
                <span className="text-8xl font-brutal text-neubrutalist-black">💻</span>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-neubrutalist-red text-neubrutalist-white px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal-red transform rotate-12">
              <span className="font-brutal text-brutal-sm">+3 AÑOS</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-neubrutalist-orange px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal-orange transform -rotate-6">
              <span className="font-brutal text-brutal-sm text-neubrutalist-black">IoT + FULLSTACK</span>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <div className="card-brutal bg-neubrutalist-white">
              <h3 className="text-brutal-md font-brutal text-neubrutalist-black mb-4">
                ¿QUIÉN SOY?
              </h3>
              <p className="text-lg font-brutal text-neubrutalist-black leading-relaxed">
                Soy Tecnólogo en Electrónica Industrial con más de 3 años de experiencia en desarrollo. 
                Me especializo en IoT y programación Full Stack, combinando hardware y software para 
                crear soluciones innovadoras. Siempre busco la excelencia y nuevas formas de resolver problemas.
              </p>
            </div>
            
            <div className="card-brutal bg-neubrutalist-lime">
              <h3 className="text-brutal-md font-brutal text-neubrutalist-black mb-4">
                MI MISIÓN
              </h3>
              <p className="text-lg font-brutal text-neubrutalist-black leading-relaxed">
                Busco desarrollar estabilidad económica mediante trabajo remoto, innovando y creando 
                tecnologías que el mercado necesita. Mi objetivo es aportar soluciones eficientes 
                que combinen electrónica, IoT y desarrollo Full Stack.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-neubrutalist-blue text-neubrutalist-white px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal-blue font-brutal">
                INNOVADOR
              </span>
              <span className="bg-neubrutalist-red text-neubrutalist-white px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal-red font-brutal">
                AUTODIDACTA
              </span>
              <span className="bg-neubrutalist-orange px-4 py-2 border-brutal border-neubrutalist-black shadow-brutal-orange font-brutal text-neubrutalist-black">
                SOLUCIONADOR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
