// hard code for now, later to be used as input
let cellsPerRow = 5;
let gridSize = cellsPerRow * cellsPerRow;

let gridSizeNum = cellsPerRow;

for (i = 1; i <= gridSizeNum; i++) {
  for (j = 1; j <= gridSizeNum; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    document.getElementById('container').appendChild(cell);
    let cellSize = 600 / gridSizeNum;
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
  }
}

const test = document.getElementsByClassName("cell");

for (let i = 0; i < test.length; i++)
{
  test[i].addEventListener("mouseover", function(e) {
    e.target.style.background = "purple";
    setTimeout(() => {
          e.target.style.background = "";
        }, 500);
  }) 
}