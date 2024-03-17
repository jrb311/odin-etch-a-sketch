let gridNum = 256;
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++)
{
    const grid = document.createElement("div");
    grid.classList.add("childSquare");
    container.appendChild(grid);
};

const grid = document.querySelectorAll(".childSquare");

grid.forEach(element => {
    element.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = 'purple';
    });
});

const body = document.querySelector('body');
const buttonContainer = document.createElement("div");
const gridButton = document.createElement('button');
buttonContainer.style.cssText = "display: flex; justify-content: center";
gridButton.style.cssText = "border-radius: 25px; border-color: purple; font-size: 20px; background-color: gold; color: purple";
gridButton.textContent = "Generate New Grid";
buttonContainer.appendChild(gridButton);
body.insertBefore(buttonContainer, container);

gridButton.addEventListener('click', () => {
    while (true) {
    let gridSize = parseInt(prompt('Please enter the number of squares per side for your new grid:'));

        if (gridSize !== null && gridSize < 100 && !isNaN(gridSize)){
            break;
        }
    }
    createNewGrid(gridSize);
})

function createNewGrid(size){
    let grid = document.querySelectorAll('.childSquare');
    grid.forEach(element => {
        container.removeChild(element);
    });
    
    for (let n = 0; n < size; n++)
    {
        let newGrid = document.createElement("div");
        newGrid.classList.add("childSquare");
        container.appendChild(newGrid);
    }
};

