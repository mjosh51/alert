const alertBox = document.getElementById('alert');
const cancelButton = document.getElementById('cancel-button');
const revertButton = document.getElementById('revert-button');
const inputButton = document.getElementById('input-button');

function cancelAlert() {
  alertBox.style.display = 'none';
  revertButton.style.display = 'block';
}

function displayAlert() {
  alertBox.style.display = 'flex';
  revertButton.style.display = 'none';
}

function getColor() {
  let color = localStorage.getItem('color');
  alertBox.style.backgroundColor = color;
  revertButton.style.backgroundColor = color;
  inputButton.value = color;
}

getColor();

function saveColor(color) {
  localStorage.setItem('color', color);
}

function changeColor(e) {
  saveColor(e.target.value);
  alertBox.style.backgroundColor = e.target.value;
  revertButton.style.backgroundColor = e.target.value;
}

inputButton.addEventListener('input', changeColor);
revertButton.addEventListener('click', displayAlert);
cancelButton.addEventListener('click', cancelAlert);
