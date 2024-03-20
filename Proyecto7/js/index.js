function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    var inputValue = document.getElementById('display').value;
    var result = Math.sqrt(parseFloat(inputValue));
    document.getElementById('display').value = result;
}

function calculateSquare() {
    var inputValue = document.getElementById('display').value;
    var result = parseFloat(inputValue) * parseFloat(inputValue);
    document.getElementById('display').value = result;
}

function appendPi() {
    document.getElementById('display').value += Math.PI;
}
