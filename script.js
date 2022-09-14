const bttnLogin = document.getElementById('bttn-login');
const email = document.getElementById('lgn');
const senha = document.getElementById('psswd');

function checkLogin() {
  if (email.value === 'trybe@teste.com' || senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
bttnLogin.addEventListener('click', checkLogin);
