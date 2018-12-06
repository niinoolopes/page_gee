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
 