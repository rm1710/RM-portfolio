var typed = new Typed(".text", {
    strings:["Web Developer", "Backend and Frontend Developer", "Youtuber" ],
    typeSpeed:30,
    backSpeed:80,
    backDelay:1200,
    loop:true,
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');

    openMenu.addEventListener('click', () => {
        menu.classList.add('active');
        openMenu.classList.add('active');
        closeMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        openMenu.classList.remove('active');
        closeMenu.classList.remove('active');
    });
});