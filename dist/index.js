const input = document.querySelector('#input')
const button = document.querySelector('#button')
const out = document.querySelector('#out')

const mats = ['fuck', 'suck', 'bastard', 'cock', 'dick', 'beaver', 'pussy']

button.onclick = () => {
    var text = input.value
    if(text) {
        for(let i = 0; i < mats.length; i++) {
            while (text.indexOf(mats[i]) != -1) {
                text = text.replace(mats[i], quantity(mats[i].length))
            }
        }
        out.innerHTML += text + '<br>';
        input.value = ''

    }
    
}

function quantity(n) {
    var sum = '';
    for(let i = 0; i < n; i++) {
        sum += '*'
    }
    return sum
}