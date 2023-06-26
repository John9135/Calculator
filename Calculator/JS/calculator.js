const buttonNumber = document.getElementsByName('data-number')
const buttonOperation = document.getElementsByName('data-operation')
const buttonEqual = document.getElementsByName('data-equal')[0]
const buttonDelete = document.getElementsByName('data-delete')[0]

var result = document.getElementById('result')
var currentOperation = ''
var previousOperation = ''
var operation = undefined


buttonNumber.forEach(function (button) {
    button.addEventListener('click', function () {
        addNumber(button.innerText)
    })
})


buttonOperation.forEach(function (button) {
    button.addEventListener('click', function () {
        selectOperation(button.innerText)
    })
})


buttonEqual.addEventListener('click', function () {
    calculate()
    updateDisplay()
})

buttonDelete.addEventListener('click', function () {
    clear()
    updateDisplay()
})


function selectOperation(op) {
    if (currentOperation == '') return
    if (previousOperation != '') {
        calculate()
    }
    operation = op.toString()
    previousOperation = currentOperation
    currentOperation = ''
}


function calculate() {
    let calculation
    const previous = parseFloat(previousOperation)
    const current = parseFloat(currentOperation)

    if (isNaN(previous) || isNaN(current)) return

    switch (operation) {
        case '+':
            calculation = previous + current
            break
        case '-':
            calculation = previous - current
            break
        case '*':
            calculation = previous * current
            break
        case '/':
            calculation = previous / current
            break
        default:
            return
    }
    currentOperation = calculation
    operation = undefined
    previousOperation = ''
}


function addNumber(num) {
    currentOperation = currentOperation.toString() + num.toString()
    updateDisplay()
}


function clear() {
    currentOperation = ''
    previousOperation = ''
    operation = undefined
}


function updateDisplay() {
    result.value = currentOperation
}

clear()