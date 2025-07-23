# 🦾 Andrés Felipe Montoya - Portfolio Neubrutalist

Portfolio personal de **Andrés Felipe Montoya Baena**, Tecnólogo en Electrónica Industrial especializado en desarrollo Full Stack, IoT y automatización. Diseño moderno con estilo Neubrutalism: colores vibrantes, tipografía bold, bordes gruesos y sombras duras.

## 👨‍💻 Sobre Mí

- 🎓 **Tecnólogo en Electrónica Industrial**
- 💼 **+3 años de experiencia** en desarrollo
- 🔧 **Especialidades**: IoT, Full Stack Development, Python, React
- 📍 **Ubicación**: Palmira, Valle del Cauca, Colombia

## 🚀 Tecnologías

### Frontend
- React 18 + TypeScript + Vite
- Tailwind CSS (configurado para Neubrutalism)
- JavaScript ES6+, HTML5, CSS3

### Backend & IoT  
- Python, Node.js
- OpenCV, MQTT, Pandas
- Raspberry Pi, Sensores, Automatización

### Herramientas
- Git, Docker, VS Code
- Node-RED, Grafana, InfluxDB

## 📦 Proyectos Destacados

### 🥚 [Seleccionador de Huevos IoT](https://github.com/pipe-2233/seleccionador_huevos)
Sistema de clasificación de huevos con Visión Artificial e IoT:
- **Tecnologías**: Python, OpenCV, MQTT, Node-RED, Grafana
- **Hardware**: Raspberry Pi, sensores ultrasónicos
- **Funciones**: Detección automática, clasificación en tiempo real, monitoreo web

### 📈 [Financial Dashboard](https://github.com/pipe-2233/financial-dashboardx)  
Dashboard de análisis financiero en tiempo real:
- **Tecnologías**: React, TypeScript, Chart.js, Tailwind
- **Funciones**: Visualización de datos, seguimiento de portfolio, gráficos interactivos

## 🎨 Características del Portfolio

### 🖌️ Estilo Neubrutalism
- Colores planos y vibrantes (#FFFF00, #FF1493, #32FF32, #0080FF)
- Bordes gruesos (4px) y sombras duras (8px offset)
- Tipografía sans-serif bold (Inter, Poppins)
- Layout asimétrico con elementos rotados

### 📱 Responsive Design
- Optimizado para desktop, tablet y mobile
- Navegación suave entre secciones
- Animaciones y micro-interactions

## 🌐 Enlaces

- **GitHub**: [pipe-2233](https://github.com/pipe-2233)
- **LinkedIn**: [Andrés Felipe Montoya](https://www.linkedin.com/in/andres-felipe-montoya-baena-749b63256)
- **Twitter**: [@AndresMont80705](https://x.com/AndresMont80705)
- **Instagram**: [@andres_montoya_0](https://instagram.com/andres_montoya_0)

## � Contacto

- **Email**: andresfelipemonotya56@gmail.com
- **WhatsApp**: +57 320 357 4631
- **Ubicación**: Palmira, Valle del Cauca, Colombia

## 🛠 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-neubrutalist.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📄 Deploy

Este proyecto está optimizado para despliegue en:
- **Vercel** (recomendado)
- **Netlify** 
- **GitHub Pages**

---

> 💡 **¿Buscas un desarrollador Full Stack con experiencia en IoT?** ¡Hablemos!

**© 2025 Andrés Felipe Montoya Baena - Todos los derechos reservados**

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
