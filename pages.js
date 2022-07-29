// navbar -------- dont just this code Brother
const ulNavbar = document.querySelector('.item2');
const ulList = document.querySelector('.item2 ul');
const openUl = document.querySelector('.ham');
const nav__4 = document.querySelector('#nav__4');

const closeUl = document.querySelector('.close');

openUl.addEventListener('click', e => {
    ulNavbar.style.display = 'block';
    setTimeout(() => {
        ulList.style.transform = 'translateX(0)'
    }, 1);
    document.body.style.overflow = 'hidden';
    nav__4.style.zIndex = '-1'; 
})

closeUl.addEventListener('click', e => {
    ulList.style.transform = 'translateX(100%)';
    setTimeout(() => {
        ulNavbar.style.display = 'none';
        nav__4.style.zIndex = '0'; 
    }, 300);
    document.body.style.overflow = 'auto';

})



// Men section--------------






// women section -----------------




// kids sections ------------------------