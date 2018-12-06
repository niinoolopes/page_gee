
const elementoAbreModal = document.querySelectorAll('[data-modal]');
elementoAbreModal.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
         document.getElementById(e.target.dataset.modal).classList.add('ativo');
    })
});
var containerFechaModal = document.querySelectorAll('.modal-container');
containerFechaModal.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        if ( e.target.className == 'modal-btn' || e.target.className == 'modal-container ativo') {
            document.querySelector('.modal-container.ativo').classList.remove('ativo');
        }
    })
});




