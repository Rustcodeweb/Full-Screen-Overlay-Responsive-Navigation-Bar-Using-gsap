const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector("#menu-btn");
let status = false;

const menuAnimation = gsap.to(menuContainer, 2.2,{
  scaleX: 1,
  y: "100%",
  ease: Power4.easeInOut,
  paused: true
});

const link = gsap.from("nav > a", 2.2,{
  autoAlpha: 1,
  x:200,
  stagger: 0.6,
  ease: Power4.easeInOut,
  opacity: 0,
  delay: 3.5
});

menu.addEventListener("click", ({ target: {classList} }) =>{

  if (!status) {
    menuAnimation.play();
    TweenMax.delayedCall(1, function(){
      link.play();
      classList.remove("fa-bars");
      classList.add("fa-times");
    });
    status = !status;
  }
  else {
    link.reverse();
    TweenMax.delayedCall(3.8, function(){
      menuAnimation.reverse();
      classList.add("fa-bars");
      classList.remove("fa-times");
    });
    status = !status;
  }

});
