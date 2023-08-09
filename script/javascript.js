// // hard code for now, later to be used as input
// let cellsPerRow = 4;


for (let i = 0; i < 16; i++) {
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.textContent = i;
    document.getElementById('container').appendChild(cell);
}

// const cell = document.getElementById("container");

// cell.addEventListener("mouseenter", (e) => {
//     e.target.style.color = "purple";
// });



const test = document.getElementById("container");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseenter target
    event.target.style.background = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.background = "";
    }, 500);
  },
  false,
);