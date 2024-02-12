btnAll = document.querySelectorAll('.btnAll')
btnClear = document.querySelector('.btnClear')
btnBackspace = document.querySelector('.btnBackspace')
btnEqual = document.querySelector('.btnEqual')
result = document.querySelector('.result')

btnAll.forEach((btn) => {
    btn.addEventListener('click', () => {
        result.value += btn.textContent
    })
})

btnEqual.addEventListener('click', () => {
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
})

btnClear.addEventListener('click', () => {
    result.value = ''
})

btnBackspace.addEventListener('click', () => {
    result.value = result.value.slice(0, -1)
})
