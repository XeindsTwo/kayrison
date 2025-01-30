window.addEventListener('scroll', function () {
  const header = document.querySelector('.header--sticky');
  const home = document.querySelector('.home');
  const statisticsSection = document.getElementById('statistics');
  const scrollY = window.scrollY || window.pageYOffset;
  const minWidth = 885;

  if (window.innerWidth > minWidth) {
    if (header && home && statisticsSection) {
      if (scrollY >= statisticsSection.offsetTop) {
        header.style.position = 'static';
        home.style.position = 'static';
      } else {
        header.style.position = 'sticky';
        home.style.position = 'sticky';
      }
    }
  }
});