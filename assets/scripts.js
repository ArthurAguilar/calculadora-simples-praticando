btnAll = document.querySelectorAll('.btnAll')
btnBackspace = document.querySelector('.btnBackspace')
btnClear = document.querySelector('.btnClear')
btnEqual = document.querySelector('.btnEqual')
btnNumber = document.querySelectorAll('.btnNumber')
btnOpt = document.querySelectorAll('.btnOpt')
result = document.querySelector('.result')

btnAll.forEach((btn) => {
    btn.addEventListener('click', () => {
        let value = btn.textContent
        result.value += value
    })
})

btnClear.addEventListener('click', () => {
    result.value = ''
})

btnBackspace.addEventListener('click', () => {
    if (result.value > 0) {
        result.value = result.value.slice(0, -1)
    }
})

btnEqual.addEventListener('click', () => {
    let equation = result.value

    if (equation !== '') {
        try {
            result.value = eval(equation)
        }
        catch(err) {
            console.error('Deu erro' + err)
            alert('Digite a expressão corretamente!')

        }
    } else {
        alert('Por favor, digite a expressão')
    }
})


