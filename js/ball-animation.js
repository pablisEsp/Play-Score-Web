/**
 * Random Ball Movement for Play&Score Coming Soon Page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all soccer balls
    const balls = document.querySelectorAll('.soccer-ball');
    
    // Initialize each ball with random animation
    balls.forEach((ball, index) => {
        // Set initial random position off-screen
        const startPosition = Math.random() * 100;
        ball.style.top = `${startPosition}%`;
        
        // Apply random animation
        const animationName = `ball-movement-${(index % 5) + 1}`;
        const duration = 15 + Math.random() * 15; // 15-30 seconds
        const delay = Math.random() * 5; // 0-5 seconds delay
        
        ball.style.animation = `${animationName} ${duration}s linear ${delay}s infinite`;
        
        // Add hover event to change direction
        ball.addEventListener('mouseenter', function() {
            // Pause the animation
            this.style.animationPlayState = 'paused';
            
            // Scale and rotate the ball
            this.style.transform = `scale(1.2) rotate(${Math.random() * 360}deg)`;
            
            // After hover, change direction
            setTimeout(() => {
                // Get current computed style to find current position
                const computedStyle = window.getComputedStyle(this);
                const currentLeft = parseFloat(computedStyle.left);
                const currentTop = parseFloat(computedStyle.top);
                
                // Remove the animation
                this.style.animation = 'none';
                
                // Set the current position explicitly
                this.style.left = `${currentLeft}px`;
                this.style.top = `${currentTop}px`;
                
                // Force reflow
                void this.offsetWidth;
                
                // Choose a new random animation
                const newAnimIndex = Math.floor(Math.random() * 5) + 1;
                const newAnimName = `ball-movement-${newAnimIndex}`;
                const newDuration = 15 + Math.random() * 15;
                
                // Apply new animation
                this.style.animation = `${newAnimName} ${newDuration}s linear infinite`;
                this.style.animationPlayState = 'running';
                this.style.transform = '';
            }, 300);
        });
    });
});