import profilePhoto from '../assets/photo_perfil.jpg';

const Hero = () => {
  return (
    <section id="hero" className="section-brutal min-h-screen flex items-center justify-center bg-neubrutalist-yellow relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-neubrutalist-pink border-brutal border-neubrutalist-black shadow-brutal-pink transform rotate-12"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-neubrutalist-lime border-brutal border-neubrutalist-black shadow-brutal-lime transform -rotate-12"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto mb-8 border-brutal border-neubrutalist-black shadow-brutal transform rotate-3 overflow-hidden">
          <img 
            src={profilePhoto} 
            alt="Andrés Felipe Montoya Baena - Full Stack Developer & IoT Specialist" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="heading-brutal text-center mb-4">
          <span className="block text-brutal-xl">ANDRÉS FELIPE</span>
          <span className="block text-brutal-lg text-neubrutalist-red">MONTOYA BAENA</span>
        </h1>
        
        {/* Subtitle */}
        <div className="mb-8">
          <span className="inline-block bg-neubrutalist-black text-neubrutalist-white px-6 py-3 border-brutal border-neubrutalist-black shadow-brutal text-brutal-sm font-brutal transform -rotate-1">
            FULL STACK DEVELOPER & IoT SPECIALIST
          </span>
        </div>
        
        {/* Description */}
        <p className="text-xl font-brutal text-neubrutalist-black mb-12 max-w-2xl mx-auto leading-tight">
          Tecnólogo en Electrónica Industrial especializado en desarrollo Full Stack, 
          Python, React y soluciones IoT. +3 años creando tecnología innovadora.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="btn-brutal bg-neubrutalist-red text-neubrutalist-white shadow-brutal-red"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            VER PROYECTOS
          </a>
          <a
            href="/CV-Andres-Felipe-Montoya-2025-updated.pdf"
            download="CV-Andres-Felipe-Montoya-2025.pdf"
            className="btn-brutal bg-neubrutalist-lime text-neubrutalist-black shadow-brutal"
          >
            📥 DESCARGAR CV
          </a>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        <div className="w-16 h-16 bg-neubrutalist-orange border-brutal border-neubrutalist-black shadow-brutal-orange animate-bounce"></div>
      </div>
      <div className="absolute top-1/3 right-10 transform -translate-y-1/2">
        <div className="w-20 h-20 bg-neubrutalist-purple border-brutal border-neubrutalist-black shadow-brutal animate-pulse"></div>
      </div>
    </section>
  )
}

export default Hero
