const n1 = document.querySelector('[name="number1"]');
n1.addEventListener('change', handleNumberOneChange);

const n2 = document.querySelector('[name="number2"]');
n2.addEventListener('change', handleNumberTwoChange);

const btnPlus = document.querySelector('[id="btn-plus"]');
btnPlus.addEventListener('click', handleBtnPlusClick);

const btnTimes = document.querySelector('[id="btn-times"]');
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', handleBtnClearClick);

const resultBox = document.querySelector('[id="result-box"]');

function handleNumberOneChange(event) {
    if (isNumber(n1.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function handleNumberTwoChange(event) {
    if (isNumber(n2.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function handleBtnPlusClick(event) {
    event.preventDefault();
    resultBox.innerHTML = Number(n1.value) + Number(n2.value);
}

function handleBtnTimesClick(event) {
    event.preventDefault();
    resultBox.innerHTML = Number(n1.value) * Number(n2.value);
}

function handleBtnClearClick(event) {
    n1.value = '';
    n2.value = '';
    resultBox.innerHTML = 0;
    n1.classList.remove("input-error");
    n2.classList.remove("input-error");
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }


