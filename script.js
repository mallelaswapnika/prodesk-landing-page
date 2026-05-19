// Mobile Menu

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark Mode Toggle

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        themeToggle.textContent = '☀️';
    }
    else{
        themeToggle.textContent = '🌙';
    }

});