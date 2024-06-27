const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const etch = document.createElement('div');
        etch.classList.add('etch');
        grid.appendChild(etch);
        grid.addEventListener("hover", () => {
            grid.style.backgroundColor= "blue";
        });
    }
}

function message() {
    prompt("Enter the desired size of the grid.");
}

console.log(grid)