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

// Show "arrow" button when scrolling down
const arrow = document.querySelector('.arrow');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
});

// Make arrow button to scroll up to Home
arrow.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

//   for (let project of projects) {
//     console.log(project);
//   }

//   let project;
//   for (let i = 0; i < projects.length; i++) {
//     project = projects[i];
//     console.log(project);
//   }

//   if (filter == null) {
//     return;
//   }
//   if (filter == 'front-end') {
//   } else if (filter == 'back-end') {
//   } else if (filter == 'machine-learning') console.log(link);

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
