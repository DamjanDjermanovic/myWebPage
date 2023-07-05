const grid = document.querySelector('#etchAGrid');
const pen = document.querySelector('#pen');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const size = document.querySelector('#size');
const rangeInput = document.querySelector('#range');
const label = document.querySelector('.form-label');
const confirm = document.querySelector('#confirm');

document.addEventListener('DOMContentLoaded', () => {
    fillEtchAGrid(16);
})

document.addEventListener('dragstart', (event) => {
    event.preventDefault();
});

function draw(square) {
    square.addEventListener('mouseenter', handleMouseEnterAndClick);
    square.addEventListener('mousedown', handleMouseEnterAndClick);

    function handleMouseEnterAndClick(event) {
        if (event.type === 'mouseenter' && event.buttons === 1) {
            square.classList.add('colored');
        }
    }
}

function erase(square) {
    square.addEventListener('mouseenter', handleMouseEnterAndClick);
    square.addEventListener('mousedown', handleMouseEnterAndClick);

    function handleMouseEnterAndClick(event) {
        if (event.type === 'mouseenter' && event.buttons === 1) {
            square.classList.remove('colored');
        }
    }
}

function fillEtchAGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('etchARow');
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('etchASquare');
            row.appendChild(square);

            draw(square);
        }
    }
}

function clearEtchAGrid() {
    const squares = document.querySelectorAll('.etchASquare');
    squares.forEach((square) => {
        square.classList.remove('colored');
    })
}

clear.addEventListener('click', (event) => {
    clearEtchAGrid();
})

rangeInput.addEventListener('change' , (event) => {
    label.textContent = rangeInput.value + 'x' + rangeInput.value;
})

confirm.addEventListener('click', (event) => {
    grid.innerHTML = "<sh></sh>";
    fillEtchAGrid(rangeInput.value);
})

pen.addEventListener('click', (event) => {
    const squares = document.querySelectorAll('.etchASquare');
    squares.forEach((square) => {
        draw(square);
    })
})

eraser.addEventListener('click', (event) => {
    const squares = document.querySelectorAll('.etchASquare');
    squares.forEach((square) => {
        erase(square);
    })
})