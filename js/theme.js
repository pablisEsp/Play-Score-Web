/**
 * Theme Switcher for Play&Score Coming Soon Page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Function to set theme
    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        // Save theme preference to localStorage
        localStorage.setItem('playScoreDarkMode', isDark);
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        setTheme(!isDarkMode);
    });
    
    // Initialize theme from localStorage or default to dark mode
    const savedTheme = localStorage.getItem('playScoreDarkMode');
    
    if (savedTheme !== null) {
        // Use saved preference
        setTheme(savedTheme === 'true');
    } else {
        // Default to dark mode for first-time visitors
        setTheme(true);
        
        // Still listen for changes in system preference for future visits
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (localStorage.getItem('playScoreDarkMode') === null) {
                setTheme(e.matches);
            }
        });
    }
});