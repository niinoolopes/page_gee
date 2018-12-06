var itensMenu = document.querySelectorAll('.link');
itensMenu.forEach(item => {
    item.addEventListener('click', scrollToId);
})
function scrollToId(e) {
    e.preventDefault();
    var id = this.getAttribute('href');

    if (window.innerWidth < 769) {
        var alturaMenuFixo = document.querySelector(".header-topo").offsetHeight;
    } else {
        var alturaMenuFixo = document.querySelector(".header-fixed").offsetHeight;
    }

    var section = document.querySelector(id).offsetTop - alturaMenuFixo;

    window.scroll(
        {
            top: section,
            behavior: "smooth"
        }
    );
}