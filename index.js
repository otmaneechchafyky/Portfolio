let typed = new Typed('.typing-effect-span', {
  strings: ['Moroccan', 'a Developer.', 'Your next employee.'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");

const function1 = document.getElementById("function1");
const function2 = document.getElementById("function2");
const function3 = document.getElementById("function3");
const function4 = document.getElementById("function4");

const func = document.querySelectorAll('.func');
const funcInfo = document.querySelectorAll('.function-info');

function showFunction1() {
  info2.style.display = "none";
  info3.style.display = "none";
  info4.style.display = "none";
  info1.style.display = "block";

  function1.style.backgroundColor = "#3b4455";
  function2.style.backgroundColor = "transparent";
  function3.style.backgroundColor = "transparent";
  function4.style.backgroundColor = "transparent";

  function1.style.color = "rgb(52 211 153)";
  function2.style.color = "#fff";
  function3.style.color = "#fff";
  function4.style.color = "#fff";
}

function showFunction2() {
  info1.style.display = "none";
  info3.style.display = "none";
  info4.style.display = "none";
  info2.style.display = "block";

  function2.style.backgroundColor = "#3b4455";
  function1.style.backgroundColor = "transparent";
  function3.style.backgroundColor = "transparent";
  function4.style.backgroundColor = "transparent";

  function2.style.color = "rgb(52 211 153)";
  function1.style.color = "#fff";
  function3.style.color = "#fff";
  function4.style.color = "#fff";
}

function showFunction3() {
  info2.style.display = "none";
  info1.style.display = "none";
  info4.style.display = "none";
  info3.style.display = "block";

  function3.style.backgroundColor = "#3b4455";
  function2.style.backgroundColor = "transparent";
  function1.style.backgroundColor = "transparent";
  function4.style.backgroundColor = "transparent";

  function3.style.color = "rgb(52 211 153)";
  function2.style.color = "#fff";
  function1.style.color = "#fff";
  function4.style.color = "#fff";
}

function showFunction4() {
  info2.style.display = "none";
  info3.style.display = "none";
  info1.style.display = "none";
  info4.style.display = "block";

  function4.style.backgroundColor = "#3b4455";
  function2.style.backgroundColor = "transparent";
  function3.style.backgroundColor = "transparent";
  function1.style.backgroundColor = "transparent";

  function4.style.color = "rgb(52 211 153)";
  function2.style.color = "#fff";
  function3.style.color = "#fff";
  function1.style.color = "#fff";
}

// add menu navbar mobile version

const navbar =  document.querySelector('.navbar');
const menuIcon = document.getElementById('menu-icon');
const menuLink = document.querySelectorAll('.menu-link');
const avatar = document.querySelector('.avatar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    if(navbar.classList.contains('active')){
      menuIcon.src = "./Assets/x-bold.svg";

    } else {
      menuIcon.src = "./Assets/hamburger-md.svg";
    }


});

menuLink.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.src = "./Assets/hamburger-md.svg";
  })
});

const form = document.getElementById('my-form');
const REQUIRED_MESSAGE = 'Invalid email, Do not use uppercase.';

function validation(input, showMessage) {
  const Regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const email = input.value.trim();

  if (!Regex.test(email)) {
    input.value = '';
    const errorMsg = input.parentNode.querySelector('.error');
    errorMsg.innerText = showMessage;
    input.style.borderBottomColor = 'red';
    return false;
  }
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validation(form.elements.email, REQUIRED_MESSAGE);
  if (emailValid) {
    form.submit();
  }
});

document.querySelector('.contact').scroll = () => {
  document.querySelector('.contact').classList.add('transAll')
};