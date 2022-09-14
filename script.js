const bttnLogin = document.getElementById('bttn-login');
const email = document.getElementById('lgn');
const senha = document.getElementById('psswd');
const checkBox = document.getElementById('agreement');
const sbtBtn = document.getElementById('submit-btn');

function checkLogin() {
  if (email.value === 'trybe@teste.com' || senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
bttnLogin.addEventListener('click', checkLogin);

document.getElementById('submit-btn').disabled = true;
function checkVerify() {
  if (checkBox.checked) {
    sbtBtn.disabled = false;
  }
}
checkBox.addEventListener('click', checkVerify);
