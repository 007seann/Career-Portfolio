'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on 'contact me' button on home
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to be trasparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// const homeAvatar = document.querySelector('.home__avatar');
// const homeTitle = document.querySelector('.home__title');
// const homeDescription = document.querySelector('.home__description');

// document.addEventListener('scroll', () => {
//   console.log(window.scrollY);
//   if ((window.scrollY = 0)) {
//     homeAvatar.classList.add('home__avatar-1');
//   } else if ((window.scrollY = homeHeight / 2)) {
//     homeAvatar.classList.add('home__avatar-2');
//   } else if ((window.scrollY = homeHeight)) {
//     homeAvatar.classList.add('home__avatar-3');
//   }
// });

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
