const container = document.querySelector("#main-container");

const resetButton = document.querySelector("#resetGrid")

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      cell.addEventListener("mouseover", changeGridColor);
      container.appendChild(cell).className = "grid-item";
    };
  };

function changeGridColor(event) {
  let a = Math.floor(Math.random() * 360);
 
  event.target.style.backgroundColor = `hsl(${a}, 100%, 50%)`;
  event.target.style.opacity += 0.1;

  console.log(event)
}

function resetGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  /* 
  let gridSelect;
  resetButton.addEventListener("click", gridSelect = prompt("Grid has been reset, please choose a number (between 1-100) to create a new grid:"));
  if( gridSelect > 0 || gridSelect < 101) {
    makeRows(gridSelect, gridSelect);
  } else alert("Invalid number chosen, please choose a number between 1 - 100!");
  */
}

resetButton.addEventListener("click", () =>{
  resetGrid();
  let gridSelect = Math.round(prompt("Grid has been reset, please choose a number (between 1-100) to create a new grid:"));
  if( gridSelect > 0 && gridSelect < 101) {
    makeRows(gridSelect, gridSelect);
  } else {
    makeRows(16, 16);
  }
})

makeRows(16, 16);