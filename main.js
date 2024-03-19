//Create global variables for establishing initial grid and create the container for the etch-a-sketch grid
let gridNum = 256;
const container = document.querySelector(".container");
//Create default 16x16 grid
for (let i = 0; i < 256; i++)
{
    const grid = document.createElement("div");
    grid.classList.add("childSquare");
    grid.style.cssText = `height:${400/16}px; width:${400/16}px; border: 1px solid purple; display: inline-block`
    container.appendChild(grid);
};
//Run function for coloring the grid on mouseover
colorGrid();
//Create button to prompt user to create a new grid
const body = document.querySelector('body');
const buttonContainer = document.createElement("div");
const gridButton = document.createElement('button');
buttonContainer.style.cssText = "display: flex; justify-content: center";
gridButton.style.cssText = "border-radius: 25px; border-color: purple; font-size: 20px; background-color: gold; color: purple";
gridButton.textContent = "Generate New Grid";
buttonContainer.appendChild(gridButton);
body.insertBefore(buttonContainer, container);
//Add prompt for user input to select new grid size
gridButton.addEventListener('click', () => {
    let gridSize;

    while (true) {
    gridSize = parseInt(prompt('Please enter the number of squares per side for your new grid:'));

        if (gridSize !== null && gridSize <= 100 && !isNaN(gridSize)){
            break;
        }
    }
    createNewGrid(gridSize);
})
//Define function prototype for coloring the grid on mouseover
function colorGrid(){
    const grid = document.querySelectorAll(".childSquare");

    grid.forEach(element => {
        element.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = randomRgb();
        });
    });
};
//Define function prototype for creating a new grid with user input size
function createNewGrid(size){
    let square = document.querySelectorAll('.childSquare');
    square.forEach(element => {
        container.removeChild(element);
    });
    
    for (let n = 0, s = size*size; n < s; n++)
    {
        let newGrid = document.createElement("div");
        newGrid.classList.add("childSquare");
        newGrid.style.cssText = `height:${400/size}px; width:${400/size}px; border: 1px solid purple;`
        container.appendChild(newGrid);
    }
    colorGrid();
};
//Function to generate random color values for etch-a-sketch
function randomColor(max){
    return Math.floor(Math.random()*(max +1));

};
//Function to generate rgb values
function randomRgb(){
    let r = randomColor(255).toString();
    let g = randomColor(255).toString();
    let b = randomColor(255).toString();
    return `rgb(${r},${g},${b})`; 
};


