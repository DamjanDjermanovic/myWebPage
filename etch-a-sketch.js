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

function fillEtchAGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('etchARow');
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('etchASquare');
            row.appendChild(square);

            drawOrErase(square, "draw");
        }
    }
}

function drawOrErase(square, action) {
    square.addEventListener('mouseover', handleMouseOverAndClick);
    square.addEventListener('mousedown', handleMouseOverAndClick);

    function handleMouseOverAndClick(event) {
        if (event.type === 'mouseover' && event.buttons === 1) {
            if (action === 'draw') square.classList.add('colored');
            else if (action === 'erase') square.classList.remove('colored');
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
        drawOrErase(square, "draw");
    })
}

eraser.onclick = () => {
    selectSquares().forEach((square) => {
        drawOrErase(square, "erase");
    })
}