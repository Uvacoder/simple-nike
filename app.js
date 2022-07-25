const ulNavbar = document.querySelector('.item2');
const ulList = document.querySelector('.item2 ul');
const openUl = document.querySelector('.ham');

const closeUl = document.querySelector('.close');

openUl.addEventListener('click', e => {
    ulNavbar.style.display = 'block';
    setTimeout(() => {
        ulList.style.transform = 'translateX(0)'
    }, 1);
    document.body.style.overflow = 'hidden';
})

closeUl.addEventListener('click', e => {
    ulList.style.transform = 'translateX(100%)';
    setTimeout(() => {
        ulNavbar.style.display = 'none'
    }, 300);
    document.body.style.overflow = 'auto';
})




const navbar__2 = document.querySelector('#nav__2');
let lastScrollTop = 0;
window.addEventListener('scroll', e => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollUp;
    if (scrollTop > lastScrollTop) {
        navbar__2.style.transform = 'translateY(-100%)'
    } else {
        navbar__2.style.transform = 'translateY(0)'
    }
    lastScrollTop = scrollTop;
}) 