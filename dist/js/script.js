//navbar-fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    
    }else {
        header.classList.remove('navbar-fixed');
    }
};

//menu
const kupu = document.querySelector ('#kupu'); //js akan mencari id yg namanya luv
const navMenu = document.querySelector('#nav-menu');


kupu.addEventListener('click', function() { 
    kupu.classList.toggle('kupu-active'); //jika uda ada class hilangkan, jika blm tambahkan 
    navMenu.classList.toggle('hidden');
});