
const button = document.querySelector("button")
const body = document.querySelector ("body")

const colors = ["red", "orange", "yellow", "green", "blue"]

body.style.backgroundColor = "black"

button.addEventListener ("click", changeBackground)

function changeBackground() {
    const colorIndex = Math.floor(Math.random()* colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
