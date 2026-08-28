import perfil from '../assets/perfil.png'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-dark-bg text-dark-text font-sans flex flex-col items-center justify-center"
    >
      {/* CONTENEDOR MAESTRO: foto + texto en el mismo eje, centrado vertical y horizontal.
          h-screen garantiza que TODO cabe sin scroll en pantallas normales. */}
      <div className="relative flex items-center justify-center w-full h-screen">

        {/* PORTAFOLIO: una sola capa que ocupa el ancho, centrada en el contenedor.
            Su top-1/2 con -translate-y-1/2 + aspect ratio igual al de la foto hace que
            el texto cruce la imagen por la mitad exacta. */}
        <h1
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 text-center font-sans font-black tracking-tighter leading-none text-[clamp(4rem,16vw,12rem)] text-white select-none whitespace-nowrap uppercase"
        >
          PORTAFOLIO
        </h1>

        {/* FOTO: capa intermedia */}
        <div className="relative z-10 w-[55vw] max-w-[420px] md:w-[45vw] md:max-w-[640px] select-none filter drop-shadow-2xl">
          <img
            src={perfil}
            alt="Andrés Felipe Montoya Baena — Full Stack & IoT Developer"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* PORTAFOLIO outline: al frente (z-30), capa más visible sobre la foto */}
        <h1
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 text-center font-sans font-black tracking-tighter leading-none text-[clamp(4rem,16vw,12rem)] text-transparent select-none whitespace-nowrap uppercase"
          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)' }}
        >
          PORTAFOLIO
        </h1>
      </div>

      {/* Tagline: con position absolute respecto al section, no al contenedor maestro.
          pb-16 la sube del borde inferior para no chocar con el scroll indicator. */}
      <div className="absolute z-40 bottom-20 left-1/2 -translate-x-1/2 text-center">
        <p className="text-dark-muted text-xs md:text-sm tracking-[0.4em] uppercase font-mono whitespace-nowrap">
          Andrés Felipe Montoya
          <span className="mx-3 text-dark-dim">·</span>
          Full Stack <span className="text-accent-cyan">&</span> IoT Developer
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute inset-x-0 bottom-6 z-40 flex justify-center text-dark-dim">
        <ChevronDown
          className="h-6 w-6 animate-bounce opacity-70"
          aria-label="Desplaza hacia abajo"
        />
      </div>
    </section>
  )
}

export default Hero
