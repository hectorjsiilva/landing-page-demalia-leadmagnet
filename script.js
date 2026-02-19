/* ===================================
   SCRIPT INTERACTIVO - LANDING PAGE
   ===================================*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Configurar el video HTML5 nativo
    const mainVideo = document.getElementById('mainVideo');
    
    if (mainVideo) {
        // Establecer volumen máximo
        mainVideo.volume = 1;
        mainVideo.muted = false;
        
        console.log('✅ Video inicializado - Volumen:', mainVideo.volume);
        
        // Monitorear cuando el usuario intente cambiar el volumen
        mainVideo.addEventListener('volumechange', () => {
            console.log('Volumen:', mainVideo.volume, 'Muted:', mainVideo.muted);
            if (mainVideo.muted) {
                mainVideo.muted = false;
                console.log('Se intentó silenciar - revertido');
            }
        });
        
        // Asegurar volumen cuando comienza a reproducir
        mainVideo.addEventListener('play', () => {
            mainVideo.volume = 1;
            mainVideo.muted = false;
            console.log('▶️ Reproduciendo');
        });
        
        // Manejo de errores
        mainVideo.addEventListener('error', (e) => {
            console.error('❌ Error de video:', e);
        });
        
        // Confirmar que carga
        mainVideo.addEventListener('loadedmetadata', () => {
            console.log('✅ Metadatos cargados - Duración:', mainVideo.duration);
        });
        
        mainVideo.addEventListener('canplay', () => {
            console.log('✅ Video listo para reproducir');
        });
    }


    // ===== ANIMACIONES AL SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todos los elementos animables
    document.querySelectorAll('.benefit-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Efecto de seguimiento del mouse en el video
    const videoWrapper = document.querySelector('.video-wrapper');
    
    if (videoWrapper) {
        videoWrapper.addEventListener('mousemove', (e) => {
            const rect = videoWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            videoWrapper.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(0, 102, 255, 0.15), rgba(0, 102, 255, 0))`;
        });

        videoWrapper.addEventListener('mouseleave', () => {
            videoWrapper.style.background = 'none';
        });
    }

    // Rastreo de clicks en el botón CTA para analytics (opcional)
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            // Efecto de ondulación al hacer click
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = ctaButton.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            ctaButton.appendChild(ripple);
        });
    }

    // Agregar estilos para la animación de ripple
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Animación de entrada escalonada
    const animateStaggered = (selector, delay = 100) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.animation = `fadeInUp 0.8s ease-out ${delay * index}ms forwards`;
        });
    };

    // Contar visitantes (opcional - puedes integrar con Google Analytics)
    console.log('🚀 Landing page cargada correctamente');

    // Detectar si el usuario está en móvil
    const isMobile = () => window.innerWidth <= 768;
    
    if (!isMobile()) {
        // Efectos adicionales solo en desktop
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Podrías agregar más efectos aquí si lo deseas
        });
    }

    // Validar que el enlace de Calendly esté disponible
    setTimeout(() => {
        const calendlyLink = document.querySelector('.cta-button');
        if (calendlyLink && !calendlyLink.href.includes('calendly.com')) {
            console.warn('⚠️ Asegúrate de que el link de Calendly sea correcto');
        }
    }, 1000);
});

// Efecto de desvanecimiento en elementos al hacer scroll en la página
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('[data-scroll]').forEach(el => {
        const offset = el.offsetTop;
        const elementHeight = el.offsetHeight;
        const windowHeight = window.innerHeight;
        const distance = offset - scrolled - windowHeight / 2;
        
        if (distance < windowHeight && distance > -elementHeight) {
            el.style.opacity = Math.min(1, 1 - Math.abs(distance) / (windowHeight / 2));
        }
    });
});

// Función para compartir en redes sociales (opcional)
const shareOnSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Descubre cómo automatizar tu negocio 🚀');
    
    const links = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        whatsapp: `https://wa.me/?text=${title} ${url}`
    };
    
    if (links[platform]) {
        window.open(links[platform], '_blank', 'width=600,height=400');
    }
};

// Exportar función para uso externo
window.shareOnSocial = shareOnSocial;
