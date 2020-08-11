//to the top scroll
const upArrow = document.getElementById('arrowUp');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        upArrow.classList.add('visible');
    } else {
        upArrow.classList.remove('visible');
    }
    console.log(window.scrollY);
});
upArrow.addEventListener('click', () => {
    //document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});
const navBar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navBar.style.top = 0;
    }
    else {
        navBar.style.top = 90 + 'px';
    }
});
const blogs = document.getElementById('blogs');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) {
        blogs.classList.add('visible');
    } else {
        blogs.classList.remove('visible');
    }
});
