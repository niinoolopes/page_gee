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