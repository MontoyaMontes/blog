/* ============== MENU SHOW AND HIDDEN ==============*/

/* ======= PC SHOW/HIDDEN =======*/

/* Variables */
const navMenu = document.querySelector(".navMenu");

const navigation = document.querySelector(".navigation");


/* MENU SHOW*/

navMenu.addEventListener("click", ()=> {
	navMenu.classList.toggle("active");
	navigation.classList.toggle("active");	
});

/*MENU CLOSE WHEN CLICK*/

function toggleMenu(){
	navMenu.classList.remove("active");
	navigation.classList.remove("active");
}

/* ======= MOBILE SHOW/HIDDEN =======*/

const navlink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('navMenu');
	navMenu.classList.remove('active')
}

navlink.forEach(n => n.addEventListener('click',linkAction));



/* ============== BODY ==============*/

window.addEventListener("scroll", function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky",window.scrollY>0);
})

