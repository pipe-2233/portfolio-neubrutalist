import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Configuración de EmailJS desde variables de entorno
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'andresfelipemontoya56@gmail.com'
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      alert('¡Mensaje enviado exitosamente! Te contactaré pronto.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error enviando email:', error)
      alert('Error al enviar el mensaje. Por favor intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    {
      name: "GITHUB",
      url: "https://github.com/pipe-2233",
      color: "bg-neubrutalist-black text-neubrutalist-white",
      shadowColor: "shadow-brutal"
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/andres-felipe-montoya-baena-749b63256",
      color: "bg-neubrutalist-blue text-neubrutalist-white",
      shadowColor: "shadow-brutal-blue"
    },
    {
      name: "TWITTER",
      url: "https://x.com/AndresMont80705",
      color: "bg-neubrutalist-lime text-neubrutalist-black",
      shadowColor: "shadow-brutal-lime"
    },
    {
      name: "INSTAGRAM",
      url: "https://instagram.com/andres_montoya_0",
      color: "bg-neubrutalist-red text-neubrutalist-white",
      shadowColor: "shadow-brutal-red"
    }
  ]

  return (
    <section id="contact" className="section-brutal bg-neubrutalist-pink relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neubrutalist-yellow border-brutal border-neubrutalist-black shadow-brutal transform rotate-45 opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neubrutalist-lime border-brutal border-neubrutalist-black shadow-brutal-lime transform -rotate-12 opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-neubrutalist-orange border-brutal border-neubrutalist-black shadow-brutal-orange transform rotate-12 opacity-80"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="heading-brutal text-center text-neubrutalist-white mb-16">
          HABLEMOS
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-brutal bg-neubrutalist-white">
              <h3 className="text-brutal-md font-brutal text-neubrutalist-black mb-6">
                ¡TRABAJEMOS JUNTOS!
              </h3>
              <p className="text-lg font-brutal text-neubrutalist-black leading-relaxed mb-6">
                ¿Tienes un proyecto de IoT, desarrollo Full Stack o necesitas automatización? 
                ¡Contacta conmigo! Busco oportunidades remotas y presenciales para crear soluciones innovadoras.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neubrutalist-blue border-brutal border-neubrutalist-black shadow-brutal-blue flex items-center justify-center">
                    <span className="text-neubrutalist-white font-brutal">📧</span>
                  </div>
                  <span className="font-brutal text-neubrutalist-black">andresfelipemonotya56@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neubrutalist-lime border-brutal border-neubrutalist-black shadow-brutal-lime flex items-center justify-center">
                    <span className="text-neubrutalist-black font-brutal">📱</span>
                  </div>
                  <span className="font-brutal text-neubrutalist-black">+57 313 643 6028 </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neubrutalist-red border-brutal border-neubrutalist-black shadow-brutal-red flex items-center justify-center">
                    <span className="text-neubrutalist-white font-brutal">📍</span>
                  </div>
                  <span className="font-brutal text-neubrutalist-black">Palmira, Valle del Cauca, Colombia</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-brutal-md font-brutal text-neubrutalist-white mb-6">
                SÍGUEME EN
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} px-4 py-3 border-brutal border-neubrutalist-black ${link.shadowColor} hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150 font-brutal text-center`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-brutal bg-neubrutalist-white">
            <h3 className="text-brutal-md font-brutal text-neubrutalist-black mb-6">
              ENVÍAME UN MENSAJE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-brutal text-neubrutalist-black mb-2">
                  NOMBRE *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-brutal border-neubrutalist-black bg-neubrutalist-yellow font-brutal text-neubrutalist-black placeholder-neubrutalist-black focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-150"
                  placeholder="Tu nombre aquí"
                />
              </div>
              
              <div>
                <label className="block font-brutal text-neubrutalist-black mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-brutal border-neubrutalist-black bg-neubrutalist-lime font-brutal text-neubrutalist-black placeholder-neubrutalist-black focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-150"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block font-brutal text-neubrutalist-black mb-2">
                  MENSAJE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-brutal border-neubrutalist-black bg-neubrutalist-blue text-neubrutalist-white font-brutal placeholder-neubrutalist-white focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-150 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-brutal ${
                  isLoading 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-neubrutalist-red text-neubrutalist-white shadow-brutal-red'
                }`}
              >
                {isLoading ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t-brutal border-neubrutalist-white">
          <p className="font-brutal text-neubrutalist-white text-lg">
            Hecho con 💻 y mucho ☕ por ANDRÉS FELIPE MONTOYA
          </p>
          <p className="font-brutal text-neubrutalist-white text-sm mt-2 opacity-80">
            © 2025 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
