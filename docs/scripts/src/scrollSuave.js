const itensMenu = document.querySelectorAll('.link');
itensMenu.forEach(item => {
    item.addEventListener('click', scrollToId);
})
function scrollToId(e) {
  e.preventDefault();
  let id = this.getAttribute('href');
  let MenuTopo= document.querySelector(".header-topo").offsetHeight;
  let Menufixed = document.querySelector(".header-fixed").offsetHeight;
  let alturaMenu = (window.innerWidth < 769) ? MenuTopo: Menufixed;
  let section = document.querySelector(id).offsetTop - alturaMenu;
  window.scroll(
      {
          top: section,
          behavior: "smooth"
      }
  );
}