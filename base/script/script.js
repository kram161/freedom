const menuButton = document.querySelector('.header__burger-menu__button');
const mobileMenu = document.querySelector('#Mobile-menu');
mobileMenu.style.transform = 'translateY(-100%)';
menuButton.addEventListener('click', function() {
    if(mobileMenu.style.transform === 'translateY(-100%)'){
        mobileMenu.style.transform = 'translateY(0)'
        menuButton.classList.add('header__burger-menu__button-active')
    }
    else{
        mobileMenu.style.transform = 'translateY(-100%)';
        menuButton.classList.remove('header__burger-menu__button-active')
    }
});