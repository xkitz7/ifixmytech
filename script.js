// Simple JavaScript for interactivity
console.log("iFixMyTech website loaded successfully!");

// You can add more functionality here later
// For example, a function to handle smooth scrolling for navigation links

document.addEventListener('DOMContentLoaded', function() {
    // This code runs after the page fully loads
    console.log("Welcome to iFixMyTech!");
    
    // Example: Add a click event to all nav links for smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});
