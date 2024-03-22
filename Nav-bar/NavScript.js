const toggler=document.getElementById('toggler');
const navList=document.getElementById('nav-menu');

toggler.addEventListener('click', () =>
{
    navList.classList.toggle('active');
    // toggler.innerHTML='<i class="fa-sharp fa-regular fa-circle-xmark"></i>';
})

// main page login/sinin

const logclass=document.getElementsByClassName('login');

const log=document.getElementById('log-in');
log.addEventListener('click', () =>{
   
    window.location='signup.html';
    // logclass.classList.toggle('active');
})




//login page 
const Reset=document.getElementsByClassName('reset');
const sign=document.getElementById('signinSubmit');
const login=document.getElementById('loginSubmit');

Reset.addEventListener('click', () =>{
    Reset.reset();
})
