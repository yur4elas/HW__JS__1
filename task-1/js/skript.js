function redirection() {
    window.open('https://www.google.by/', '_blank')
}

const area__btn = bodyStyle = document.getElementById('area__btn')

function changeStyle() {
    if (bodyStyle.style.backgroundColor === 'aqua') {
        bodyStyle.style.backgroundColor = 'green'
    } else {
        bodyStyle.style.backgroundColor = 'aqua'
    }
}

const flexContainer = document.getElementById('flexContainer')

function hidebutton() {
    area__btn.style.display = 'none'
    flexContainer.classList.toggle('active')
}

const headerBurger = document.getElementById('header__burger')
const headerMenu = document.getElementById('header__menu')

function addMenu() {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
}