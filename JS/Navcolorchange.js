const Nav = document.querySelector('nav');
const container=document.querySelector('.container');
const changecolor = (event) =>
{
    event.preventDefault();
    if(window.scrollY==100)
    Nav.style.backgroundColor="red";
}
Nav.addEventListener('scroll',changecolor);