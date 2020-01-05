const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.navigation__item a');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

navItem.forEach(item => item.addEventListener('click', handleClick));