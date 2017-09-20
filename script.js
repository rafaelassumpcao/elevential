// Write your JavaScript here

const $ = document.querySelectorAll.bind(document);

const nextButton = Array.from($('.sign-area'));
const btnsPassword = Array.from($('.btn-password'));
const [errorMessage, successMessage, noMatchPassword] = [...$('.error, .success, .no-match')];


//apresenta borda vermelha nos campos não preenchidos
const markFieldsWithoutValues = inputs =>
  inputs
    .map(input =>
      input.value === ""
        ?
        input.style.borderColor = 'red'
        :
        input.style.borderColor = 'black');

const checkForBlankFields = inputs =>
  inputs
    .filter(input => input.value === "").length > 0;

const isPassWordEqual = () => {
  const [firstPassword, secondPassword] = [...$('.password')];
  if (firstPassword.value === secondPassword.value)
    return true;
  return false;
}


const updateFormStatus = (isInputsWithOutValue, inputs) => {
  if (isInputsWithOutValue) {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }
  else if (!isPassWordEqual()) {
    noMatchPassword.style.display = 'block';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  }
  else {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    noMatchPassword.style.display = 'none';
    setTimeout(
      () => successMessage.style.display = 'none'
      , 3000);
    inputs.map(input => input.value = "");
  }
}


const handleClick = ev => {
  ev.preventDefault();
  const { target: { nodeName } } = ev;
  const inputs = [...$('form#signForm input')];
  if (nodeName === 'BUTTON') {
    markFieldsWithoutValues(inputs);
    const isInputsWithOutValue = checkForBlankFields(inputs);
    updateFormStatus(isInputsWithOutValue, inputs);
  }
};

const handlePassword = ev => {
  const { target } = ev;
  let passwordInput = target.previousElementSibling;
  let { type } = passwordInput;
  passwordInput.type === "password"
    ?
    passwordInput.type = "text"
    :
    passwordInput.type = "password"

  target.innerText === 'Show Password'
    ?
    target.innerText = 'Hide Password'
    :
    target.innerText = 'Show Password'
}

//listener para tratar clicks no next e toda a area em volta
nextButton[0].addEventListener('click', handleClick);

//listener para botões de password
btnsPassword.forEach(btn =>
  btn.addEventListener('click', handlePassword));

$('.close')[0].addEventListener('click', ev => {
  const [modal] = [...$('.box')];
  modal.style.display = 'none';
  const div = document.createElement('div');
  div.innerHTML = `<h1>reinicie a pagina para ver o modal novamente</h1>`;
  $('.container')[0].appendChild(div);
})




