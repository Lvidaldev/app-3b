const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const rememberforgotLink = document.querySelector('.rememberforgot-link');


const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.remove('active-remember');
});

rememberforgotLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active'); // remove registro, por exemplo
    wrapper.classList.add('active-remember');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active', 'active-remember');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});