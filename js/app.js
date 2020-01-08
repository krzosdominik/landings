const header = document.querySelector('.page-header');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.navigation__item a');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

navItem.forEach(item => item.addEventListener('click', handleClick));

const scrolled = () => {
    if (window.scrollY >= 200) {
        header.classList.toggle('page-header--onScroll');
        document.removeEventListener('scroll', scrolled);
    }
};

document.addEventListener('scroll', scrolled);

const videoButton = document.querySelector('.video__button');

videoButton.addEventListener('click', event => {
    event.target.classList.toggle('video__button--initial');
    event.target.classList.toggle('video__button--playing');

});