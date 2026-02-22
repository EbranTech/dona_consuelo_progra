/*  SELECCIÓN DE ELEMENTOS */
const menuToggle = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.navegacion-principal');
const buttons = document.querySelectorAll('.btn');
const enlaces = document.querySelectorAll('.navegacion-principal .enlace');


/* FUNCIONES*/ 
/*EVENTO CLICK*/

if(menuToggle && navLinks){
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');    
}); 
}

/*EVENTOS A BOTONES*/
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert('¡Botón clickeado!');
    });
});
