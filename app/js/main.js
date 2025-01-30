import {theme} from './theme.js';

theme();

const html = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header__mobile');
const anchors = document.querySelectorAll('a.header__link-mobile');

menuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  html.classList.toggle('active');
  header.classList.toggle('active');
  menuBtn.classList.toggle('active');
  menuBtn.blur();
});

function scrollToTarget(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    html.classList.remove('active');
    header.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => {
      let targetOffset;
      if (targetId.includes('#testimonials')) {
        targetOffset = targetSection.offsetTop;
      } else {
        targetOffset = targetSection.offsetTop - 25;
      }
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }, 400);
  }
}

function handleAnchorClick(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const hrefParts = href.split('#');
  if (hrefParts.length === 2) {
    const targetId = '#' + hrefParts[1];
    scrollToTarget(targetId);
  }
}

for (const anchor of anchors) {
  anchor.addEventListener('click', handleAnchorClick);
  anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
}

document.addEventListener("DOMContentLoaded", function () {
  const infoSection = document.querySelector(".info");
  const closeButton = document.getElementById("close_aml_bot");

  if (!infoSection || !closeButton) return;

  const lastClosed = localStorage.getItem("amlCloseTime");
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  if (lastClosed && now - lastClosed < oneWeek) {
    infoSection.style.display = "none";
  }

  closeButton.addEventListener("click", function () {
    infoSection.style.display = "none";
    localStorage.setItem("amlCloseTime", Date.now());
  });
});