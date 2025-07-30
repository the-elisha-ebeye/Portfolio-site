let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

let themeToggle = document.querySelector('#theme-toggle');
let body = document.body;

themeToggle.onclick = () => {
    body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('bx-sun');
    themeToggle.classList.toggle('bx-moon');

    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
};

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
    }
};


