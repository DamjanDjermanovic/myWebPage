const grid = document.querySelector('#etchAGrid');
const squares = document.querySelectorAll('.square');

function fillEtchAGrid(size = 16) {
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
            });
        }
    }
}

fillEtchAGrid();