// Diccionario de traducciones
const translations = {
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-features': 'Características',
        'nav-screenshots': 'Capturas',
        'nav-download': 'Descargar',
        'nav-contact': 'Contacto',
        
        // Meta datos
        'page-title': 'Play & Score - Red Social Deportiva para Fútbol Amateur',
        'page-description': 'Play & Score: La aplicación multiplataforma que combina red social deportiva con herramientas de gestión para fútbol amateur. Disponible en Android y Desktop.',
        
        // Hero Section
        'hero-subtitle': 'La revolución del fútbol amateur',
        'hero-description': 'Una aplicación multiplataforma que combina red social deportiva con herramientas de gestión avanzadas. Conecta con jugadores, organiza torneos y gestiona equipos de forma profesional.',
        'btn-download': 'Descargar Ahora',
        'btn-features': 'Ver Características',
        'stat-shared-code': 'Código Compartido',
        'stat-platforms': 'Plataformas',
        'stat-realtime': 'Tiempo Real',
        'preview-time': 'hace 2h',
        'preview-message': '¡Victoria épica 3-2! 🔥⚽',
        
        // Features
        'features-title': 'Características Principales',
        'features-subtitle': 'Todo lo que necesitas para gestionar tu experiencia futbolística',
        'feature-social-title': 'Red Social Deportiva',
        'feature-social-desc': 'Feed interactivo con publicaciones y estadísticas en tiempo real. Conecta con jugadores y comparte tus mejores momentos.',
        'feature-tournaments-title': 'Gestión de Torneos',
        'feature-tournaments-desc': 'Crea y administra torneos con emparejamientos automáticos. Calendario inteligente y seguimiento de resultados.',
        'feature-admin-title': 'Administración Avanzada',
        'feature-admin-desc': 'App de escritorio para moderar usuarios, equipos y torneos. Control total de roles y contenido.',
        'feature-multiplatform-title': 'Multiplataforma',
        'feature-multiplatform-desc': 'Experiencia consistente en Android y Desktop con 85% de código compartido. Material Design 3 optimizado.',
        'feature-realtime-title': 'Tiempo Real',
        'feature-realtime-desc': 'Sincronización instantánea con Firebase. Resultados, estadísticas y comunicación en vivo.',
        'feature-stats-title': 'Estadísticas Detalladas',
        'feature-stats-desc': 'Análisis completo de rendimiento, historial de partidos y métricas personalizadas para jugadores y equipos.',
        
        // Screenshots
        'screenshots-title': 'Capturas de Pantalla',
        'screenshots-subtitle': 'Descubre la interfaz moderna y intuitiva de Play & Score',
        'screenshot-feed': 'Feed Social',
        'screenshot-teams': 'Gestión de Equipos',
        'screenshot-tournaments': 'Torneos',
        'caption-feed': 'Feed social interactivo',
        'caption-teams': 'Administración de equipos',
        'caption-tournaments': 'Sistema de torneos',
        
        // Technology
        'tech-title': 'Tecnología de Vanguardia',
        'tech-subtitle': 'Desarrollado con las mejores herramientas para máximo rendimiento',
        'tech-frontend': 'Frontend',
        'tech-backend': 'Backend',
        'tech-architecture': 'Arquitectura',
        'tech-realtime': 'Sincronización en Tiempo Real',
        
        // Download
        'download-title': 'Descarga Play & Score',
        'download-subtitle': 'Únete a la comunidad deportiva más innovadora. Disponible para Android y Desktop.',
        'download-for': 'Descargar para',
        'download-note': 'Versión actual: 1.0.0 | Requiere Android 7.0+ o Windows 10+',
        
        // Contact
        'contact-title': 'Contacto',
        'contact-subtitle': '¿Tienes preguntas? Nos encantaría ayudarte',
        'contact-academic': 'Proyecto Académico',
        'form-name': 'Tu nombre',
        'form-email': 'Tu email',
        'form-subject-placeholder': 'Selecciona un tema',
        'form-subject-general': 'Consulta general',
        'form-subject-feature': 'Solicitar característica',
        'form-subject-bug': 'Reportar error',
        'form-subject-collab': 'Colaboración',
        'form-message': 'Tu mensaje',
        'form-submit': 'Enviar Mensaje',
        
        // Footer
        'footer-description': 'La revolución del fútbol amateur. Conecta, juega y compite con la mejor tecnología.',
        'footer-product': 'Producto',
        'footer-docs': 'Documentación',
        'footer-support': 'Soporte',
        'footer-faq': 'FAQ',
        'footer-guides': 'Guías',
        'footer-community': 'Comunidad',
        'footer-legal': 'Legal',
        'footer-terms': 'Términos de Uso',
        'footer-privacy': 'Privacidad',
        'footer-cookies': 'Cookies',
        'footer-licenses': 'Licencias',
        'footer-copyright': '© 2025 Play & Score. Proyecto Final de Grado - Desarrollo de Aplicaciones Multiplataforma.',
        'footer-made-with': 'Desarrollado con ❤️ para la comunidad futbolística amateur.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-screenshots': 'Screenshots',
        'nav-download': 'Download',
        'nav-contact': 'Contact',
        
        // Meta data
        'page-title': 'Play & Score - Sports Social Network for Amateur Football',
        'page-description': 'Play & Score: The multiplatform application that combines sports social networking with advanced management tools for amateur football. Available on Android and Desktop.',
        
        // Hero Section
        'hero-subtitle': 'The amateur football revolution',
        'hero-description': 'A multiplatform application that combines sports social networking with advanced management tools. Connect with players, organize tournaments and manage teams professionally.',
        'btn-download': 'Download Now',
        'btn-features': 'View Features',
        'stat-shared-code': 'Shared Code',
        'stat-platforms': 'Platforms',
        'stat-realtime': 'Real Time',
        'preview-time': '2h ago',
        'preview-message': 'Epic victory 3-2! 🔥⚽',
        
        // Features
        'features-title': 'Main Features',
        'features-subtitle': 'Everything you need to manage your football experience',
        'feature-social-title': 'Sports Social Network',
        'feature-social-desc': 'Interactive feed with real-time posts and statistics. Connect with players and share your best moments.',
        'feature-tournaments-title': 'Tournament Management',
        'feature-tournaments-desc': 'Create and manage tournaments with automatic pairings. Smart calendar and results tracking.',
        'feature-admin-title': 'Advanced Administration',
        'feature-admin-desc': 'Desktop app to moderate users, teams and tournaments. Full control of roles and content.',
        'feature-multiplatform-title': 'Multiplatform',
        'feature-multiplatform-desc': 'Consistent experience on Android and Desktop with 85% shared code. Material Design 3 optimized.',
        'feature-realtime-title': 'Real Time',
        'feature-realtime-desc': 'Instant synchronization with Firebase. Live results, statistics and communication.',
        'feature-stats-title': 'Detailed Statistics',
        'feature-stats-desc': 'Complete performance analysis, match history and custom metrics for players and teams.',
        
        // Screenshots
        'screenshots-title': 'Screenshots',
        'screenshots-subtitle': 'Discover the modern and intuitive interface of Play & Score',
        'screenshot-feed': 'Social Feed',
        'screenshot-teams': 'Team Management',
        'screenshot-tournaments': 'Tournaments',
        'caption-feed': 'Interactive social feed',
        'caption-teams': 'Team administration',
        'caption-tournaments': 'Tournament system',
        
        // Technology
        'tech-title': 'Cutting-edge Technology',
        'tech-subtitle': 'Developed with the best tools for maximum performance',
        'tech-frontend': 'Frontend',
        'tech-backend': 'Backend',
        'tech-architecture': 'Architecture',
        'tech-realtime': 'Real-time Sync',
        
        // Download
        'download-title': 'Download Play & Score',
        'download-subtitle': 'Join the most innovative sports community. Available for Android and Desktop.',
        'download-for': 'Download for',
        'download-note': 'Current version: 1.0.0 | Requires Android 7.0+ or Windows 10+',
        
        // Contact
        'contact-title': 'Contact',
        'contact-subtitle': 'Have questions? We\'d love to help you',
        'contact-academic': 'Academic Project',
        'form-name': 'Your name',
        'form-email': 'Your email',
        'form-subject-placeholder': 'Select a topic',
        'form-subject-general': 'General inquiry',
        'form-subject-feature': 'Request feature',
        'form-subject-bug': 'Report bug',
        'form-subject-collab': 'Collaboration',
        'form-message': 'Your message',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-description': 'The amateur football revolution. Connect, play and compete with the best technology.',
        'footer-product': 'Product',
        'footer-docs': 'Documentation',
        'footer-support': 'Support',
        'footer-faq': 'FAQ',
        'footer-guides': 'Guides',
        'footer-community': 'Community',
        'footer-legal': 'Legal',
        'footer-terms': 'Terms of Use',
        'footer-privacy': 'Privacy',
        'footer-cookies': 'Cookies',
        'footer-licenses': 'Licenses',
        'footer-copyright': '© 2025 Play & Score. Final Degree Project - Multiplatform Application Development.',
        'footer-made-with': 'Developed with ❤️ for the amateur football community.'
    }
};

// Variables globales
let currentLanguage = 'es';
let currentScreenshot = 1;
const totalScreenshots = 3;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeContactForm();
    initializeScreenshotCarousel();
    initializeFloatingAnimations();
    initializeLanguageToggle();
    loadSavedLanguage();
});

// Navegación móvil
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        // Simple toggle function
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = navMenu.classList.contains('active');
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (!isActive) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(13, 13, 13, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(13, 13, 13, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Smooth scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    const heroButtons = document.querySelectorAll('.hero-buttons a');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .tech-category, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
}

// Animación de contadores
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const numericValue = parseInt(target.replace('%', ''));
        
        let current = 0;
        const increment = numericValue / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            counter.textContent = Math.floor(current) + (isPercentage ? '%' : '');
        }, 30);
    });
}

// Carrusel de capturas
function initializeScreenshotCarousel() {
    setInterval(() => {
        changeScreenshot(1);
    }, 5000);
}

function changeScreenshot(direction) {
    const screenshots = document.querySelectorAll('.screenshot');
    const dots = document.querySelectorAll('.dot');
    
    if (screenshots.length === 0) return;
    
    screenshots[currentScreenshot - 1].classList.remove('active');
    dots[currentScreenshot - 1].classList.remove('active');
    
    currentScreenshot += direction;
    
    if (currentScreenshot > totalScreenshots) {
        currentScreenshot = 1;
    } else if (currentScreenshot < 1) {
        currentScreenshot = totalScreenshots;
    }
    
    screenshots[currentScreenshot - 1].classList.add('active');
    dots[currentScreenshot - 1].classList.add('active');
}

function changeScreenshot(n) {
    const screenshots = document.querySelectorAll('.screenshot');
    const dots = document.querySelectorAll('.dot');
    
    screenshots.forEach(screenshot => screenshot.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentScreenshot = n;
    
    screenshots[currentScreenshot - 1].classList.add('active');
    dots[currentScreenshot - 1].classList.add('active');
}

// Formulario de contacto
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }

    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('error');

    switch (field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = currentLanguage === 'es' 
                    ? 'Por favor, ingresa un email válido'
                    : 'Please enter a valid email';
            }
            break;
        case 'text':
            if (value.length < 2) {
                isValid = false;
                errorMessage = currentLanguage === 'es'
                    ? 'Este campo debe tener al menos 2 caracteres'
                    : 'This field must have at least 2 characters';
            }
            break;
        case 'textarea':
            if (value.length < 10) {
                isValid = false;
                errorMessage = currentLanguage === 'es'
                    ? 'El mensaje debe tener al menos 10 caracteres'
                    : 'The message must have at least 10 characters';
            }
            break;
    }

    if (field.required && value === '') {
        isValid = false;
        errorMessage = currentLanguage === 'es'
            ? 'Este campo es requerido'
            : 'This field is required';
    }

    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = '#ff4444';
        errorDiv.style.fontSize = '0.85rem';
        errorDiv.style.marginTop = '0.5rem';
        field.parentNode.appendChild(errorDiv);
    }

    return isValid;
}

function handleFormSubmission(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    let allValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });

    if (!allValid) {
        const errorMessage = currentLanguage === 'es' 
            ? 'Por favor, corrige los errores en el formulario'
            : 'Please correct the errors in the form';
        showNotification(errorMessage, 'error');
        return;
    }

    const sendingText = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
    submitButton.innerHTML = `<div class="loading"></div> ${sendingText}`;
    submitButton.disabled = true;

    setTimeout(() => {
        form.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        const successMessage = currentLanguage === 'es'
            ? '¡Mensaje enviado con éxito! Te contactaremos pronto.'
            : 'Message sent successfully! We will contact you soon.';
        showNotification(successMessage, 'success');
    }, 2000);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span class="notification-text">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#14B82A' : type === 'error' ? '#ff4444' : '#333'};
        color: white;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;

    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-text { flex: 1; }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .notification-close:hover { opacity: 0.7; }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Animaciones flotantes
function initializeFloatingAnimations() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const heroDecoration = document.querySelector('.hero-decoration');
        if (heroDecoration) {
            heroDecoration.style.transform = `translateY(${rate}px)`;
        }
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const techIcons = document.querySelectorAll('.tech-item i');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.6s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });
}

// Funciones de traducción
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
}

function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('play-score-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        updateLanguageDisplay();
        translatePage();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('play-score-language', currentLanguage);
    updateLanguageDisplay();
    translatePage();
    
    const message = currentLanguage === 'es' 
        ? 'Idioma cambiado a Español' 
        : 'Language changed to English';
    showNotification(message, 'success');
}

function updateLanguageDisplay() {
    const langText = document.querySelector('.lang-text');
    const htmlRoot = document.getElementById('html-root');
    
    if (langText) {
        langText.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    }
    
    if (htmlRoot) {
        htmlRoot.setAttribute('lang', currentLanguage);
    }
}

function translatePage() {
    const elements = document.querySelectorAll('[data-lang]');
    const placeholderElements = document.querySelectorAll('[data-lang-placeholder]');
    
    document.body.classList.add('language-switching');
    
    setTimeout(() => {
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                if (element.tagName === 'META') {
                    element.setAttribute('content', translations[currentLanguage][key]);
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        });
        
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                element.setAttribute('placeholder', translations[currentLanguage][key]);
            }
        });
        
        const titleElement = document.querySelector('title[data-lang]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-lang');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                document.title = translations[currentLanguage][key];
            }
        }
        
        document.body.classList.remove('language-switching');
    }, 150);
}

// Utilidades
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function isMobile() {
    return window.innerWidth <= 768;
}

// Event listeners globales
window.addEventListener('scroll', debounce(function() {
    // Scroll optimizado
}, 10));

window.addEventListener('resize', debounce(function() {
    if (isMobile()) {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
}, 250));

window.addEventListener('error', function(e) {
    console.error('Error capturado:', e.error);
});

// Exportar funciones para uso global
window.changeScreenshot = changeScreenshot;
