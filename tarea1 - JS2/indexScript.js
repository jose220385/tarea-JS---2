const body = document.querySelector("body")
const rojo = document.getElementById('rojo')
const azul = document.getElementById('azul')
const verde = document.getElementById('verde')

rojo.addEventListener('click', function(e) {
    e.preventDefault()
    body.style.backgroundColor = "red"
})

azul.addEventListener('click', function(e) {
    e.preventDefault()
    body.style.backgroundColor = "blue"
})

verde.addEventListener('click', function(e) {
    e.preventDefault()
    body.style.backgroundColor = "green"
})