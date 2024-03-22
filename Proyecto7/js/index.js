let history = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;
        addToHistory(expression + ' = ' + result);
    } catch (error) {
        document.getElementById('display').value = 'Fatal Error';
    }
}

function calculateSquareRoot() {
    let inputValue = document.getElementById('display').value;
    let result = Math.sqrt(parseFloat(inputValue));
    document.getElementById('display').value = result;
    addToHistory('√(' + inputValue + ') = ' + result);
}

function calculateSquare() {
    let inputValue = document.getElementById('display').value;
    let result = parseFloat(inputValue) * parseFloat(inputValue);
    document.getElementById('display').value = result;
    addToHistory('(' + inputValue + ')^2 = ' + result);
}

function appendPi() {
    document.getElementById('display').value += Math.PI;
}

function addToHistory(operation) {
    history.push(operation);
    updateHistory();
}

function updateHistory() {
    let historyElement = document.getElementById('history');
    historyElement.innerHTML = '';
    history.forEach(operation => {
        let listItem = document.createElement('li');
        listItem.textContent = operation;
        historyElement.appendChild(listItem);
    });
}
