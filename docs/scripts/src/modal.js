
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
