const headerDesktop = document.querySelector('.header');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const scrollThreshold = 20;

  if (Math.abs(currentScroll - lastScrollTop) <= scrollThreshold) {
    return;
  }

  if (currentScroll > lastScrollTop) {
    headerDesktop.style.transform = 'translateY(-100%)';
    headerDesktop.classList.remove('fixed');
  } else {
    headerDesktop.style.transform = 'translateY(0)';
    headerDesktop.classList.add('fixed');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
})