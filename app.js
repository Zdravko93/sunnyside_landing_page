const toggleMenu = document.querySelector('.toggle__menu');
// console.log(toggleMenu);
const navTrack = document.querySelector('.nav__links');
console.log(navTrack);


const navSlide = () => {
   navTrack.classList.toggle('toggle__active');
};

toggleMenu.addEventListener('click', navSlide);

