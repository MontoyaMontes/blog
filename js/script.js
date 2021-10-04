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


cta1.addEventListener("click", ()=> {
		more1.classList.toggle("hidden");
})


cta2.addEventListener("click", ()=> {
		more2.classList.toggle("hidden");
})

/*
const more1 = document.querySelector(".pdfContainer1"),
		  cta1 = document.querySelector(".cta1");
		  
const ctaClose = document.querySelector(".ctaClose");

ctaClose.addEventListener("click", ()=> {
		more.classList.toggle("hidden");
})
*/

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

/* ============== GALLERY ==============*/

// Selecting all the images.
const images = document.querySelectorAll("img");

// The API options: when 20% of the image is visible.
const imgOptions = {
  threshold: 0.2
};

// Calling the API constructor.
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    // If the image is not visible.
    if (!entry.isIntersecting) return;
    
    // If it's visible.
    const img = entry.target;
    img.src = img.src.replace("w=10&", "w=800&");
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);

// Observing the images.
images.forEach((img) => {
  imgObserver.observe(img);
});


