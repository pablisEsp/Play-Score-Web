// Variables globales
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
});

// Navegación móvil
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 13, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth scrolling para los enlaces de navegación
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Compensar la altura del navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Actualizar clase activa
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Botones de hero
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

// Animaciones al hacer scroll
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

    // Agregar observador a elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.feature-card, .tech-category, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Animación de contadores en las estadísticas del hero
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
        const increment = numericValue / 50; // Ajustar velocidad
        
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

// Carrusel de capturas de pantalla
function initializeScreenshotCarousel() {
    // Auto-advance carousel
    setInterval(() => {
        changeScreenshot(1);
    }, 5000);
}

function changeScreenshot(direction) {
    const screenshots = document.querySelectorAll('.screenshot');
    const dots = document.querySelectorAll('.dot');
    
    // Remover clase active de la imagen actual
    screenshots[currentScreenshot - 1].classList.remove('active');
    dots[currentScreenshot - 1].classList.remove('active');
    
    // Calcular nueva posición
    currentScreenshot += direction;
    
    if (currentScreenshot > totalScreenshots) {
        currentScreenshot = 1;
    } else if (currentScreenshot < 1) {
        currentScreenshot = totalScreenshots;
    }
    
    // Agregar clase active a la nueva imagen
    screenshots[currentScreenshot - 1].classList.add('active');
    dots[currentScreenshot - 1].classList.add('active');
}

function currentScreenshot(n) {
    const screenshots = document.querySelectorAll('.screenshot');
    const dots = document.querySelectorAll('.dot');
    
    // Remover clase active de todos
    screenshots.forEach(screenshot => screenshot.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Establecer nueva posición
    currentScreenshot = n;
    
    // Activar elementos correspondientes
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

    // Validación en tiempo real
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

    // Remover mensajes de error previos
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('error');

    // Validaciones específicas
    switch (field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, ingresa un email válido';
            }
            break;
        case 'text':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Este campo debe tener al menos 2 caracteres';
            }
            break;
        case 'textarea':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'El mensaje debe tener al menos 10 caracteres';
            }
            break;
    }

    // Campos requeridos
    if (field.required && value === '') {
        isValid = false;
        errorMessage = 'Este campo es requerido';
    }

    // Mostrar error si es necesario
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
    
    // Validar todos los campos
    const inputs = form.querySelectorAll('input, textarea, select');
    let allValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });

    if (!allValid) {
        showNotification('Por favor, corrige los errores en el formulario', 'error');
        return;
    }

    // Mostrar estado de carga
    submitButton.innerHTML = '<div class="loading"></div> Enviando...';
    submitButton.disabled = true;

    // Simular envío (aquí podrías integrar con un servicio real)
    setTimeout(() => {
        // Resetear formulario
        form.reset();
        
        // Restaurar botón
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
    }, 2000);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Crear nueva notificación
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

    // Estilos de notificación
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

    // Agregar estilos para el contenido
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-text {
            flex: 1;
        }
        
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
        
        .notification-close:hover {
            opacity: 0.7;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Animaciones flotantes adicionales
function initializeFloatingAnimations() {
    // Efecto parallax ligero en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const heroDecoration = document.querySelector('.hero-decoration');
        if (heroDecoration) {
            heroDecoration.style.transform = `translateY(${rate}px)`;
        }
    });

    // Efecto hover en las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efecto de rotación en los iconos de tecnología
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

// Utilidades adicionales
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

// Optimización de rendimiento para scroll
const optimizedScrollHandler = debounce(function() {
    // Aquí puedes agregar lógica adicional de scroll optimizada
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Manejo de errores globales
window.addEventListener('error', function(e) {
    console.error('Error capturado:', e.error);
    // Opcional: reportar errores a un servicio de monitoreo
});

// Detección de dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Eventos de redimensionado
window.addEventListener('resize', debounce(function() {
    // Reajustar elementos si es necesario
    if (isMobile()) {
        // Lógica específica para móvil
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Animación de escritura para el título (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Lazy loading para imágenes (si las agregas en el futuro)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Exportar funciones para uso global
window.changeScreenshot = changeScreenshot;
window.currentScreenshot = currentScreenshot;
