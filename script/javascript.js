// Initial data points variables, functions
let gridSizeNum = 16;
const cell = document.getElementsByClassName("cell");
CreateGrid(gridSizeNum);
FillCells();


//
// --------- Buttons --------- //
//

// Clear button functionality to reset the cells
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function (e) {
  console.log("clear button clicked");
  for (let i = 0; i < cell.length; i++) {
    cell[i].style.background = "";
  }
})

// Grid size button
const sizeButton = document.getElementById("size-button");
sizeButton.addEventListener("click", function (e) {
  console.log("size button clicked");
  gridSizeNum = prompt("Enter number of cells per side: ");
  console.log(gridSizeNum);
  if (gridSizeNum > 100) {
    while (gridSizeNum > 100) {
      gridSizeNum = prompt("Max size is 100, enter a different size: ");
      console.log(gridSizeNum);
    }
  }
  // Check input, delete old grid, recreate new grid, engage drawing
  if (gridSizeNum !== null) {
    DeleteGrid(5);
    CreateGrid(gridSizeNum);
    FillCells();
  }
})


//
// --------- Functions --------- //
//

// Function to create the grid
function CreateGrid(size) {
  let cellSize = (1000 / size);
  for (i = 1; i <= size; i++) {
    for (j = 1; j <= size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      document.getElementById('container').appendChild(cell);
      cell.style.height = `${cellSize}px`;
      cell.style.width = `${cellSize}px`;
    }
    console.log(cellSize);
  }
}

// Function to delete the created grid
function DeleteGrid(size) {
  var element = document.getElementById("container");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Function to fill in the cells
function FillCells() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseover", function(e) {
      e.target.style.background = "purple";
    }) 
  }
}