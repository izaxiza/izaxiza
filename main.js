document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    

    // Form submission interaction
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Change button text to show feedback
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Dziękuję! (Thank you!)';
        btn.style.backgroundColor = '#1d3557';
        
        // Reset after 3 seconds
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
