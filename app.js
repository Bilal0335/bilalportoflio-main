/*======================== toggle icon navbar ================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*================ scroll section active link ============= */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
          navlinks.forEach(links => {
             links.classList.remove('active');
             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          
          });
        };
    
    
    
    });

    // ============ sticky navbar ============

let header = document.querySelector('header');

header.classList.toogle('sticky',window.scrollY > 100);


/*============ remove toggle icon and navbar when click navbar link(scroll) ============ */

menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};


/*======================== scrooll reveal ================== */

 ScrollReveal({ 

 reset: true,
 distance : '80px',
 duration: 2000,
 delay : 200
 
 });

 ScrollReveal().reveal('.home-content, .heading', {origin : 'top' });
 ScrollReveal().reveal('.home_image, .service-container,.portfolio-box,.contact form', {origin : 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', {origin : 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', {origin : 'right' });

 /*======================== type js ================== */
 const typed = new Typed('.multi-text',{
 strings: ['Frontend Developer','Python'],
 typeSpeed: 50,
 backSpeed:100,
 backDelay: 100,
 loop: true
 });

               let number = document.getElementById('number');
               let counter = 0;
               setInterval(() => {
               if(counter == 65){
                              clearInterval();
               }else{
                              counter += 1;
               number.innerHTML = counter + '%'
               }
                 
               },30);


