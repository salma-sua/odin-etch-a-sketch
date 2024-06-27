const grid = document.querySelector('.grid');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const dimension = prompt("Enter the desired grid size. Value must NOT exceed 100.");
    if (dimension < 99) {
        for (let i = 0; i < dimension; i++) {
            const etchCol = document.createElement('div');
            etchCol.classList.add('etch-col');
            grid.appendChild(etchCol);
            for (let j = 0; j < dimension; j++) {
                const etchRow = document.createElement('div');
                etchRow.classList.add('etch-row');
                etchCol.appendChild(etchRow);

                etchRow.addEventListener('mouseover', (event) => {
                    event.target.style.backgroundColor = 'white';
                });
            }
        }
    } else {
        alert("Please enter a value less than 100.");
    }    
});