/**
 * Language Switcher for Play&Score Coming Soon Page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Default language
    let currentLanguage = 'en';
    
    // Get language toggle button
    const languageToggle = document.getElementById('language-toggle');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // Function to update all text elements based on language
    function updateLanguage(lang) {
        // Update all elements with data-en and data-es attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        
        // Update input placeholders
        document.querySelectorAll('[data-en-placeholder]').forEach(element => {
            element.placeholder = element.getAttribute(`data-${lang}-placeholder`);
        });
        
        // Update the current language display
        currentLangSpan.textContent = lang.toUpperCase();
        
        // Save language preference to localStorage
        localStorage.setItem('playScoreLanguage', lang);
        
        // Update current language variable
        currentLanguage = lang;
    }
    
    // Toggle language when button is clicked
    languageToggle.addEventListener('click', function() {
        const newLang = currentLanguage === 'en' ? 'es' : 'en';
        updateLanguage(newLang);
    });
    
    // Initialize language from localStorage or default to English
    const savedLanguage = localStorage.getItem('playScoreLanguage');
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    } else {
        // Try to detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('es')) {
            updateLanguage('es');
        } else {
            updateLanguage('en');
        }
    }
});