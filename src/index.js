import homepage from './template';
import menuPage from './menu';
import aboutPage from './about';
let content = document.querySelector('.content');

homepage();
let menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () => {
  menuPage();
});
let homeBtn = document.querySelector('#home-btn');
homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', () => {
  homepage();
});
let aboutBtn = document.querySelector('#about-btn');
aboutBtn = document.querySelector('#about-btn');
aboutBtn.addEventListener('click', () => {
  aboutPage();
});