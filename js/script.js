const container = document.querySelector("#main-container");

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
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  event.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  event.target.style.opacity += 0.1;

  console.log(event)
}

makeRows(16, 16);