/*==== Menu show e hidden ====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*==== Menu Show ====*/
/* Validar se constante existir*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*==== Menu hidden ====*/
/* Validar se constante existir*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*==== Remover menu mobile ====*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==== Accordion habilidades ====*/

/*==== Qualificação ====*/

/*==== Modelo serviços ====*/

/*==== Portfolio swiper ====*/

/*==== testimonial ====*/
