// var typed = new Typed(".text", {
//     strings:["Web Developer", "Backend and Frontend Developer", "Youtuber" ],
//     typeSpeed:30,
//     backSpeed:80,
//     backDelay:1200,
//     loop:true,
// });
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// document.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu');
//     const openMenu = document.querySelector('.open-menu');
//     const closeMenu = document.querySelector('.close-menu');

//     openMenu.addEventListener('click', () => {
//         menu.classList.add('active');
//         openMenu.classList.add('active');
//         closeMenu.classList.add('active');
//     });

//     closeMenu.addEventListener('click', () => {
//         menu.classList.remove('active');
//         openMenu.classList.remove('active');
//         closeMenu.classList.remove('active');
//     });

//     downloadCvButton.addEventListener('click', () => {
//         const link = document.createElement('a');
//         link.href = 'Resume.pdf';
//         link.download = 'Resume.pdf';
//         link.click();
//     });

//     const contactForm = document.getElementById('contactForm');

//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // These IDs from the previous steps
//         const serviceID = 'service_vomx4o7';
//         const templateID = 'template_s7t10to';
        
//         const formData = {
//             name: this.querySelector('#name').value,
//             email: this.querySelector('#email').value,
//             subject: this.querySelector('#subject').value,
//             message: this.querySelector('#message').value
//         };
//         emailjs.sendForm(serviceID, templateID, formData)
//             .then(() => {
//                 alert('Message sent successfully!');
//             }, (error) => {
//                 console.error('Error:', error);
//                 alert('Failed to send the message. Please try again .');
//             });
//     });
// });