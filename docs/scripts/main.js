var btnMenu = document.querySelector('.header-btn');
var itemMenu = document.querySelectorAll('.link');
btnMenu.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('ativo');


});

itemMenu.forEach( (item)=>{
    item.addEventListener('click',()=>{
        document.querySelector('.menu').classList.remove('ativo');
    })
})
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}; 

window.addEventListener('scroll', debounce(function() {
    var introHeight = document.querySelector('.intro').offsetHeight / 2
    if( window.pageYOffset > introHeight){  
        document.querySelector('.header-fixed').classList.add('scroll-ativo');
    }else{ 
        document.querySelector('.header-fixed').classList.remove('scroll-ativo');
    }
}, 50)); 
 

const blocoClick = document.querySelectorAll('.palestrante-bloco'); 


blocoClick.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if( e.target.className == 'palestrante-foto' || e.target.className == 'palestrante-nome' || e.target.className == 'modal-btn' || e.target.className == 'modal-container ativo' ){
            abrirModal(index)
        }
    })
}); 
function abrirModal(i) {
    document.querySelectorAll('.modal-container')[i].classList.toggle('ativo') 
}

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