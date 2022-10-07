function start() {
  var buttonCalculateIcm = document.querySelector('#button-calculate-imc');
  buttonCalculateIcm.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function rangeImc(imc) {
  if (imc > 40) return 'Obesidade grau III';
  if (imc >= 35) return 'Obesidade grau II';
  if (imc >= 30) return 'Obesidade grau I';
  if (imc >= 25) return 'Acima do peso';
  if (imc >= 18.5) return 'Peso normal';
  if (imc >= 17) return 'Abaixo do peso';
  if (imc >= 16) return 'Muito abaixo do peso';
  return 'inválido';
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcRange = document.querySelector('#imc-range');

  var weight = inputWeight.value;
  var height = inputHeight.value;

  var imc = Number(calculateImc(weight, height).toFixed(2));
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  imcRange.textContent = rangeImc(imc);
}

start();
