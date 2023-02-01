//get various elements into variables
const grid = document.querySelector('.grid');
const input = document.querySelector('input');
const setGridSize = document.getElementById('set-grid-size');
const resetGridBtn = document.getElementById('reset-grid-btn');

//Add event listeners to buttons
setGridSize.addEventListener('click', changeSize);
resetGridBtn.addEventListener('click', resetGrid);

//Function to create initial 16x16 grid by adding divs to DOM
function createGrid(size){
  for (var i = 0; i < size*size; ++i) {
    const column = document.createElement('div'); // create column
    column.className = 'grid-square';
    grid.appendChild(column); // append column inside grid
  }
}

//Function to change the size of the grid based on input value
function changeSize() {
  clearGrid();
  createGrid(input.value);
  grid.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
}

//Function to clear all divs which will be called before creating new grid
function clearGrid() {
  const gridArray = Array.from(grid.childNodes);
  gridArray.forEach((element) => {
    grid.removeChild(element);
  });
}

//Function to reset grid back to original 16x16
function resetGrid() {
  clearGrid();
  input.value = '';
  grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
  createGrid(16);
}

//Initial function call
createGrid(16);