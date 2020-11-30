const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let a = 0; 

btn.addEventListener('click', (e) => {
    if(input.value === ''){
        return
    }
    createElementAndDelete(input.value)
    input.value = ''
})

function createElementAndDelete(value) {
    a++
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'delete'

    btn.addEventListener('click', (e) => {
        result.removeChild(li)
        a--
        total.textContent = a
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = a
    li.appendChild(btn)
    result.appendChild(li)
}