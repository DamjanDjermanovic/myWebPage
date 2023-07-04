const grid = document.querySelector('#etchAGrid');
const size = document.querySelector('#size');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const rangeInput = document.querySelector('#range');
const label = document.querySelector('.form-label');
const confirm = document.querySelector('#confirm');

document.addEventListener('DOMContentLoaded', () => {
    fillEtchAGrid(16);
})

function fillEtchAGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('etchARow');
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('etchASquare');
            row.appendChild(square);
    
            square.addEventListener('mouseenter', (event) => {
                square.classList.add('colored');
            })
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