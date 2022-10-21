function scrollTop(elem) {
  const target = document.getElementById("scroll-top");
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('scroll-top');

const target = document.getElementById('menu');
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById('nav');
  nav.classList.toggle('in');
})