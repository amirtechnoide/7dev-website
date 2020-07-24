const signUpButton = document.getElementById('signUp');
// const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
// const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// ---------------join anchor---------------

const joinUs = document.getElementById('join1');
const joinin = document.getElementById('join2');

joinUs.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

joinin.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

