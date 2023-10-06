let nav = document.querySelector('nav'), search = document.querySelector('.search-form'), 
    cartItem = document.querySelector('.cart-container');

document.querySelector('#menu-but').onclick = () => {
    nav.classList.toggle('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
}
document.querySelector('#search-but').onclick = () => {
    search.classList.toggle('active');
    nav.classList.remove('active');
    cartItem.classList.remove('active');
}
document.querySelector('#cart-but').onclick = () => {
    cartItem.classList.toggle('active');
    nav.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    nav.classList.remove('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
}