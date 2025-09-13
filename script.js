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

const SECRET_KEY = '0x4AAAAAAB1B_dlrMi5T4NFgnNd7N7c5ByQ';

async function validateTurnstile(token, remoteip) {
    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                secret: SECRET_KEY,
                response: token,
                remoteip: remoteip
            })
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Turnstile validation error:', error);
        return { success: false, 'error-codes': ['internal-error'] };
    }
}
