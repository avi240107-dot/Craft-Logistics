/* ==========================================
   Craft Logistics - Main JavaScript
========================================== */

// Navbar Shrink on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

if (target) {
    target.scrollIntoView({
        behavior: "smooth"
    });
}

    });

});

// Scroll To Top Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Reveal Animation

const reveals=document.querySelectorAll(

".service-box,.step,#about,.workflow,.quote-form,footer"

);

function reveal(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
/* ===========================
   Counter Animation
=========================== */

const counters=document.querySelectorAll(".counter");

const startCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const increment=target/120;

const update=()=>{

count+=increment;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

};

const statSection=document.querySelector(".stats");

if(statSection){

const observer=new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

startCounter();

observer.disconnect();

}

});

observer.observe(statSection);

}
/* Mobile Menu */

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
const heroText = document.querySelector(".hero-text");

if (heroText) {
    heroText.classList.add("active");
}
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if(nav){

            nav.classList.remove("active");

        }

    });

});