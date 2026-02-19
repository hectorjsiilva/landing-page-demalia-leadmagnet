# ⚙️ CONFIGURACIÓN RÁPIDA

## 🎯 Los 5 Cambios Más Importantes

Edita estos valores directamente en `index.html`:

### 1. **VÍDEO VSL**
Línea 41 - Reemplaza `dQw4w9WgXcQ` con tu ID de vídeo:
```html
src="https://www.youtube.com/embed/TU_VIDEO_ID"
```

### 2. **ENLACE CALENDLY** ✅ YA CONFIGURADO
Línea 61 - Verifica que sea tu link correcto:
```html
href="https://calendly.com/hector-demaliaconsulting/reunion-estrategica-de-automatizacion-de-procesos"
```

### 3. **COMPANY NAME**
Línea 20:
```html
<h1>DeMalia</h1>
```
Cambia "DeMalia" por tu nombre de empresa.

### 4. **TÍTULO PRINCIPAL**
Línea 27:
```html
<h2 class="hero-title">Descubre Cómo Automatizar Tu Negocio</h2>
```

### 5. **BENEFICIOS** 
Líneas 65-74 - Modifica los 3 puntos clave:
```html
<div class="benefit-item">
    <span class="benefit-icon">⚡</span>
    <p>Ahorra 10+ horas semanales</p>
</div>

<div class="benefit-item">
    <span class="benefit-icon">📈</span>
    <p>Aumenta tu productividad</p>
</div>

<div class="benefit-item">
    <span class="benefit-icon">🚀</span>
    <p>Crece sin trabajar más</p>
</div>
```

---

## 🎨 CAMBIAR COLORES DOPAMÍNICOS

Si quieres diferentes colores, cambia estos valores en `styles.css` línea 3-11:

**Opción 1: Más Morado/Rosa (Energético)**
```css
--accent-blue: #7c3aed;    /* Púrpura */
--accent-cyan: #ec4899;    /* Rosa */
```

**Opción 2: Más Verde/Cyan (Fresco)**
```css
--accent-blue: #0ea5e9;    /* Azul cielo */
--accent-cyan: #10b981;    /* Verde */
```

**Opción 3: Naranja/Rojo (Fuego)**
```css
--accent-blue: #ea580c;    /* Naranja */
--accent-cyan: #f97316;    /* Naranja claro */
```

---

## 🚀 CÓMO ABRIR EN NAVEGADOR

**Opción 1: Directamente**
1. Abre el archivo `index.html` con tu navegador

**Opción 2: Servidor Local** (recomendado)
```bash
# Abre terminal en la carpeta y ejecuta:
python -m http.server 8000

# Luego accede a: http://localhost:8000
```

---

## ✅ ANTES DE PUBLICAR

- [ ] Cambia el vídeo de YouTube
- [ ] Verifica que el link de Calendly sea correcto
- [ ] Personaliza el nombre de la empresa
- [ ] Revisa los textos y beneficios
- [ ] Prueba en móvil y escritorio
- [ ] Haz clic en el botón para verificar que abre Calendly

---

¡Listo! Tu landing page dopamínica está lista para convertir visitas en clientes. 🎉
