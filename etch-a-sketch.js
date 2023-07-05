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

function selectSquares() {
    return squares = document.querySelectorAll('.etchASquare');
}

function clearEtchAGrid() {
    selectSquares().forEach((square) => {
        square.classList.remove('colored');
    })
}

clear.onclick = () => clearEtchAGrid();

rangeInput.onchange = () => label.textContent = rangeInput.value + 'x' + rangeInput.value;

confirm.onclick = () => {
    grid.innerHTML = "<sh></sh>";
    fillEtchAGrid(rangeInput.value);
}

pen.onclick = () => {
    selectSquares().forEach((square) => {
        draw(square);
    })
}

eraser.onclick = () => {
    selectSquares().forEach((square) => {
        erase(square);
    })
}