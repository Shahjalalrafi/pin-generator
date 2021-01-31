const generateBtn = document.querySelector('.generate-btn')

generateBtn.addEventListener('click', function() {
    const randomNumber = (Math.random() * 10000 + '').split('.')[0]
    document.getElementById('generate-input').value = randomNumber
})

const buttons = document.querySelectorAll('[data-button]')

buttons.forEach(button => {
    button.addEventListener('click',function() {
        const number = button.innerHTML
        document.getElementById('calculate-input').value += number.toString()
    })
})


const submit = document.querySelector('.submit-btn')
submit.addEventListener('click', function() {
    const randomNumber = document.getElementById('generate-input').value
    const calculateNumber = document.getElementById('calculate-input').value

    const notifyCross = document.getElementById('notify-cross')
    const notifyRight = document.getElementById('notify-right')
    if(randomNumber == calculateNumber) {
        notifyRight.style.display = 'block'
    }else {
        notifyCross.style.display = 'block'
    }

    document.getElementById('generate-input').value = ''
    document.getElementById('calculate-input').value = ''
})