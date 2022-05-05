const displayNum = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
let result = 0;
let count = 0;
let reset = 0;
let operatorName = '';

window.addEventListener('keydown', function(e) {
    const aButton = document.querySelector(`button[data-key="${e.key}"]`);
    let temp = aButton.classList.value;
    if (reset === 1 && temp === 'num') {
        displayNum.textContent = ''
        displayResult.textContent = '';
        reset = 0;
    }

    if (temp === 'num') {
        addNumber(aButton);
    } else if (temp === 'operator') {
        if (count === 0) {
            result = parseInt(displayNum.textContent);
            count = 1;
            operatorName = aButton.textContent;
            displayNum.textContent = '';
            displayResult.textContent = ` ${result} ${operatorName}`;
        } else if (count === 1) {
            operator(operatorName);
            operatorName = aButton.textContent;
            displayResult.textContent = ` ${result} ${operatorName}`;s
            operatorName = '';
        }
    } else if (temp === 'equal') {
            operator(operatorName);
            reset = 1; 
            count = 0;
            operatorName = '';
    } else if (temp === 'back') {
        goBack();
    } else if (temp === 'clear') {
        clear();
    }
});


function addNumber(aButton) {
    if (displayNum.innerText.length <= 25) {
        displayNum.textContent += aButton.textContent;
    } else {
        window.alert("Only support up to 25 digits for now");
    }
}

function operator(operatorName) {
    if (operatorName === '/') {
        result = result / parseInt(displayNum.textContent);
        displayResult.textContent = result;
        displayNum.textContent = '';
    } else if (operatorName === '*') {
        result = result * parseInt(displayNum.textContent);
        displayResult.textContent = result;
        displayNum.textContent = '';
    } else if (operatorName === '+') {
        result = result + parseInt(displayNum.textContent);
        displayResult.textContent = result;
        displayNum.textContent = '';
    } else if (operatorName === '-') {
        result = result - parseInt(displayNum.textContent);
        displayResult.textContent = result;
        displayNum.textContent = '';
    }
}

function goBack() {
    let length = displayNum.innerText.length - 1;
    displayNum.textContent = displayNum.textContent.slice(0, length);
}


function clear() {
    reset = 0; 
    count = 0;
    operatorName = '';
    displayNum.textContent = '';
    displayResult.textContent = '';
}
