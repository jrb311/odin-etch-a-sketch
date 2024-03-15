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

