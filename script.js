const navBurger = document.querySelector('#nav-burger');
const navHeader = document.querySelector('#nav-header');


navBurger.addEventListener('click', () => {
  navHeader.classList.toggle('nav--show');
});

window.addEventListener('resize', () => {
  console.log(window.innerWidth);
  if(window.innerWidth> 768)
    navHeader.classList.remove('nav--show');
})