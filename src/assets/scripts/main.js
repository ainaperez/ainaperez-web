/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

/*const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
    useKeyboard: true
});*/

//Force reload of page on window resize. Useful specially on desktops.
//Calculate only width resize, prevents reload on mobile while scrolling
var width = $(window).width(), height = $(window).height();
if($(window).width() != width || $(window).height() != height){
    location.reload(); 
}

window.onload = () => {


 /* ----- menuIcon Menu function ------*/

    const menuIcon = document.querySelector(".menu-icon"); 
    const menu = document.querySelector(".nav-bar-list");
    const navLink = document.querySelectorAll(".nav-bar-element");
    
    //open menú on menuIcon click 
    
    menuIcon.addEventListener("click", menuIconToggle); 
    
    function menuIconToggle(){
        console.log('click')
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
    }
    
    //close menú on Link click
    
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    function closeMenu() {
    menu.classList.remove("active");
    menuIcon.classList.remove("active");  
    }



/*------- Change headliner menu to second menu on big screens 
when about section is reached --------*/

var menuTop = document.querySelector('#top-menu');
var menuBottom = document.querySelector('#bottom-menu');
var secondMenu = document.querySelector('#second-menu');
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

menuChange();

function menuChange() {
    
    if(width >= 992){
        menuTop.style.display = 'block';
        menuBottom.style.display = 'block'
        secondMenu.style.display = 'none';
    
        window.onscroll = () => {
            
            var itemOffset = document.querySelector('#about').getBoundingClientRect();
    
            if(itemOffset.y <= 100){
                menuTop.style.display = 'none';
                secondMenu.style.display = 'block';
                secondMenu.style.opacity= 1;
            }else{
                menuTop.style.display = 'block';
                secondMenu.style.display = 'none';   
            }  
        }
    }else{
        menuTop.style.display = 'none';
        menuBottom.style.display = 'none'
        secondMenu.style.display = 'block';
    }
}


/*------- Headliner turning wheel --------*/

//First: check for touch device

const isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches
}

//Aplly interactivity depending on screen type
if(isTouchDevice()){
    //on touch devices it rotates on scroll
    window.onscroll = function () {
        scrollRotate();
      };
      function scrollRotate() {     
        const circle = document.querySelector(".cover");
        circle.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
      }
}else{
    function getCenter(element) {
        const {left, top, width, height} = element.getBoundingClientRect();
        return {x: left + width / 2, y: top + height / 2}
    }
    const arrow = document.querySelector("#arrow");
    const arrowCenter = getCenter(arrow);
    addEventListener("mousemove", ({clientX, clientY}) => {
        const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
        arrow.style.transform = `rotate(${angle}rad)`;
    });
    
}

}



