const board = document.querySelector('#board')
const colors = ['crimson', 'cornflowerblue', 'gold', 'darkcyan', 'bisque','pink', 'burlywood', 'khaki',]
const SOMETHING_NUMBER = 500

for (let i = 0; i < SOMETHING_NUMBER; i++ ) {
const something = document.createElement('div')
    something.classList.add('something')

    something.addEventListener('mouseover', () =>
    setColor(something))

    something.addEventListener('mouseleave', () =>
        removeColor(something))

    board.append(something)
}

function setColor(element){
    const  color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}