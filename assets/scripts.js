btnAll = document.querySelectorAll('.btnAll')
btnClear = document.querySelector('.btnClear')
btnBackspace = document.querySelector('.btnBackspace')
btnEqual = document.querySelector('.btnEqual')
btnChangeSinal = document.querySelector('.btnChangeSinal')
result = document.querySelector('.result')

function addOperation(btn) {
    const currentOp = result.value
    const lastChar = currentOp[result.value.length -1]
    const operatorKeys =  ['.', '+', '-', '*', '/'];

    if (operatorKeys.includes(lastChar) && operatorKeys.includes(btn.textContent)) {
        alert('Não repita sinais consecutivamente.')
    } else {
        result.value += btn.textContent
    }
}

function Calculate() {
    let math = result.value

    if (result.value !== '') {
        try {
            result.value = eval(math)
        } 
        catch(error) {
            console.error(`Error: ${error}`)
            console.log('Deu erro aqui!')
        }
    } else {
        alert('Por favor, digite um número primeiro!')
    }
}

function changeSignal() {
    const currentValue = parseFloat(result.value)

    if (currentValue > 0) {
        result.value = -Math.abs(currentValue)
    } else {
        result.value = Math.abs(currentValue)
    }
}

btnAll.forEach((btn) => {
    btn.addEventListener('click', () => {
        addOperation(btn)
    })
})

btnEqual.addEventListener('click', () => {
    Calculate()
})

btnClear.addEventListener('click', () => {
    result.value = ''
})

btnBackspace.addEventListener('click', () => {
    result.value = result.value.slice(0, -1)
})

btnChangeSinal.addEventListener('click', () => {
    changeSignal()
})

document.addEventListener('keydown', (evt) => {
    const allowedKeys =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', '=', 'Backspace', '(', ')'];

    if (allowedKeys.includes(evt.key)) {
        evt.preventDefault()
        if (evt.key === 'Enter' || evt.key === '=') {
            Calculate()
        } else if (evt.key === 'Backspace') {
            btnBackspace.click()
        } else {
            result.value += evt.key
        }
    }
})
