const bttnLogin = document.getElementById('bttn-login');
const email = document.getElementById('lgn');
const senha = document.getElementById('psswd');
const checkBox = document.getElementById('agreement');
const sbtBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('text-area');
const counter = document.getElementById('counter');
/*const sbtBtn = document.getElementById('submit-btn');
const sbtBtn = document.getElementById('submit-btn');
const sbtBtn = document.getElementById('submit-btn');
 */

function checkLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
bttnLogin.addEventListener('click', checkLogin);

function checkVerify() {
  if (checkBox.checked) {
    sbtBtn.disabled = false;
  } else {
    sbtBtn.disabled = true;
  }
}

const countWord = (e) => {
  console.log(e);
  if (counter.innerText === 0) {
    e.preventDefaut();
  }
  return e;
};

const countDown = () => {
  counter.innerText = 500 - textArea.value.length;
};

sbtBtn.addEventListener('click', countDown);
textArea.addEventListener('input', countWord);
checkBox.addEventListener('click', checkVerify);
