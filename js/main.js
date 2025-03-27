/**
 * Main JavaScript for Play&Score Coming Soon Page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real application, you would send this to a server
                // For now, we'll just show a success message
                emailInput.value = '';
                
                // Create and show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = currentLanguage === 'en' ?
                    'Thank you! We\'ll notify you when we launch.' :
                    '¡Gracias! Te notificaremos cuando lancemos.';
                successMessage.style.color = 'var(--success-color)';
                successMessage.style.marginTop = '10px';
                successMessage.style.position = 'absolute';
                successMessage.style.right = '0';
                successMessage.style.textAlign = 'right';
                
                // Remove any existing message
                const existingMessage = newsletterForm.querySelector('.message');
                if (existingMessage) {
                    existingMessage.remove();
                }
                
                successMessage.classList.add('message');
                newsletterForm.appendChild(successMessage);
                
                // Make sure the form has position relative for absolute positioning
                newsletterForm.style.position = 'relative';
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = this.querySelector('#name');
            const emailInput = this.querySelector('#email');
            const messageInput = this.querySelector('#message');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            if (name && email && message) {
                // In a real application, you would send this to a server
                // For now, we'll just show a success message
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                
                // Create and show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = currentLanguage === 'en' ? 
                    'Thank you for your message! We\'ll get back to you soon.' : 
                    '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
                successMessage.style.color = 'var(--success-color)';
                successMessage.style.marginTop = '10px';
                
                // Remove any existing message
                const existingMessage = contactForm.querySelector('.message');
                if (existingMessage) {
                    existingMessage.remove();
                }
                
                successMessage.classList.add('message');
                contactForm.appendChild(successMessage);
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Declare global variable for language access across scripts
    window.currentLanguage = 'en';
    
    // Update global language variable when language changes
    const languageObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'characterData' && mutation.target.parentNode.id === 'language-toggle') {
                window.currentLanguage = mutation.target.textContent.toLowerCase();
            }
        });
    });
    
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        languageObserver.observe(currentLangSpan, { characterData: true, subtree: true });
    }
});