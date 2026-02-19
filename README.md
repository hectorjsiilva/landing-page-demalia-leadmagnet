# 🚀 Landing Page Dopamínica - DeMalia Consulting

## Descripción

Landing page moderna, atractiva y dopamínica diseñada para captar atención, mostrar un vídeo VSL y convertir visitantes en clientes a través de un botón de programación de cita.

## 🎨 Características

- ✅ Diseño dopamínico con gradientes azules vibrantes (inspirado en imagen de referencia)
- ✅ Efectos visuales animados y atractivos
- ✅ Video embebido de YouTube (sustituible)
- ✅ Botón CTA llamativo y responsivo
- ✅ Optimizado para móvil (responsive design)
- ✅ Animaciones suaves y transiciones
- ✅ Fondo animado con efectos de luz
- ✅ Sección de beneficios con iconos

## 📁 Archivos

- `index.html` - Estructura HTML de la página
- `styles.css` - Estilos, animaciones y diseño responsivo
- `script.js` - Interactividades y efectos JavaScript
- `README.md` - Este archivo

## 🔧 Personalización

### 1. **Cambiar el Vídeo VSL**

En `index.html`, busca esta línea (alrededor de la línea 41):

```html
<iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="VSL - Automatización de Procesos"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

**Para YouTube:**
1. Obtén el ID de tu vídeo (ej: si la URL es `https://www.youtube.com/watch?v=abc123`, el ID es `abc123`)
2. Reemplaza el link en `src` con: `https://www.youtube.com/embed/YOUR_VIDEO_ID`

**Para otros proveedores (Vimeo, custom video):**
- Reemplaza todo el iframe con el código de embebido de tu plataforma

### 2. **Cambiar el Enlace de Calendly**

El enlace ya está configurado en `index.html` línea 61, pero si lo necesitas cambiar:

```html
<a href="https://calendly.com/hector-demaliaconsulting/reunion-estrategica-de-automatizacion-de-procesos" 
   class="cta-button" 
   target="_blank" 
   rel="noopener noreferrer">
```

Reemplaza la URL en `href` con tu enlace de Calendly.

### 3. **Cambiar Colores y Tema**

Los colores se definen en `styles.css` al principio (líneas 3-11):

```css
:root {
    --primary-dark: #0a0e27;      /* Fondo oscuro */
    --primary-darker: #050812;    /* Fondo más oscuro */
    --accent-blue: #0066ff;       /* Azul principal */
    --accent-cyan: #00d4ff;       /* Cyan/azul claro */
    --accent-purple: #7c3aed;     /* Púrpura */
    --accent-pink: #ec4899;       /* Rosa */
    --text-light: #f5f5f5;        /* Texto claro */
    --text-secondary: #b0b0b0;    /* Texto secundario */
}
```

Modifica estos valores para cambiar la paleta de colores.

### 4. **Cambiar Textos**

En `index.html`:
- Línea 20: `<h1>DeMalia</h1>` - Nombre de la empresa
- Línea 22: Tagline personalizado
- Línea 27: Título principal
- Línea 28: Subtítulo
- Línea 48: Texto del botón CTA
- Línea 50: Texto bajo el botón

### 5. **Cambiar Beneficios**

En `index.html` líneas 59-71, modifica:

```html
<div class="benefit-item">
    <span class="benefit-icon">⚡</span>
    <p>Ahorra 10+ horas semanales</p>
</div>
```

Puedes cambiar:
- El emoji (benefit-icon)
- El texto del beneficio

### 6. **Cambiar Footer**

Línea 77 en `index.html`:

```html
<p>&copy; 2026 DeMalia Consulting. Todos los derechos reservados.</p>
```

## 🎯 Uso

1. Abre `index.html` en tu navegador preferido
2. ¡Disfruta del diseño dopamínico!

Para servir localmente:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con Live Server en VS Code
# Haz clic derecho en index.html → "Open with Live Server"
```

Luego accede a `http://localhost:8000`

## 📱 Responsividad

La landing page está optimizada para:
- 📱 Móviles (480px y menores)
- 📱 Tablets (768px a 1024px)
- 🖥️ Escritorio (1920px+)

## 🎨 Colores Dopamínicos Utilizados

- **Azul Vibrante (#0066FF)**: Color principal - atrae atención
- **Cyan (#00D4FF)**: Acentos y textos destacados - genera energía
- **Negro Profundo (#0a0e27)**: Fondo - contraste y sofisticación
- **Degradados**: Combinaciones de azul-cyan para efecto dopamínico

## 🔔 Notas Importantes

1. **El vídeo de YouTube** es un placeholder. Reempláza lo con tu VSL real.
2. **El link de Calendly** ya está configurado - verifica que sea el correcto.
3. **Las animaciones** se desactivan automáticamente si el usuario tiene activado "prefers-reduced-motion".
4. **El script.js** incluye efectos de ripple y observadores de intersección para animar elementos en scroll.

## 🚀 Optimizaciones Sugeridas

Para mejorar aún más:

1. **Agregar Google Analytics** para rastrear conversiones
2. **Optimizar imágenes** si agregas más elementos visuales
3. **Implementar Dark Mode** alternativo
4. **Agregar testimonios** de clientes
5. **A/B Testing** en textos y colores del botón CTA
6. **Integración con email** (GetResponse, ConvertKit, etc.)

## 📄 Licencia

Libre para usar, modificar y distribuir. ¡Éxito con tu landing page dopamínica! 🎉

---

**Creado con ❤️ para DeMalia Consulting**
