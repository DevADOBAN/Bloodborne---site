// Efeito de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de destaque na navegação ao rolar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Efeito de brilho na lua
const moon = document.querySelector('.moon');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    moon.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`;
});