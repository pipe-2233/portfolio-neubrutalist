# 📧 CONFIGURACIÓN EMAILJS - GUÍA PASO A PASO

## 🚀 **PASO 1: Crear cuenta EmailJS**
1. Ve a: https://www.emailjs.com/
2. Haz clic en "Sign Up" 
3. Crea tu cuenta gratis (200 emails/mes)

## 🔧 **PASO 2: Configurar servicio de email**
1. Ve a "Email Services" en el dashboard
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" (recomendado)
4. Conecta tu cuenta Gmail (andresfelipemonotya56@gmail.com)
5. **Copia el SERVICE ID** que aparece

## 📝 **PASO 3: Crear template de email**
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura el template así:

**Subject:** Nuevo mensaje desde tu portafolio - {{from_name}}

**Content:**
```
Hola Andrés,

Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Enviado desde tu portafolio web
```

4. **Copia el TEMPLATE ID**

## 🔑 **PASO 4: Obtener Public Key**
1. Ve a "Account" > "General"
2. En la sección "Public Key"
3. **Copia tu PUBLIC KEY**

## ⚙️ **PASO 5: Configurar en tu proyecto**
Reemplaza los valores en el archivo `.env`:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui  
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## 🎯 **PASO 6: Probar**
1. Reinicia el servidor: `npm run dev`
2. Prueba el formulario en tu portafolio
3. ¡Deberías recibir el email en tu Gmail!

## 📧 **Variables del template que puedes usar:**
- `{{from_name}}` - Nombre del contacto
- `{{from_email}}` - Email del contacto  
- `{{message}}` - Mensaje del contacto
- `{{to_email}}` - Tu email (andresfelipemonotya56@gmail.com)

## 🔥 **¡LISTO!**
Ahora tu formulario enviará emails reales a tu Gmail cada vez que alguien te contacte desde tu portafolio.

**Límites plan gratuito:**
- 200 emails/mes
- Todas las funciones básicas
- Sin marca de agua

¿Necesitas ayuda con algún paso? ¡Avísame!
