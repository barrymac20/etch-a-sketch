const gridContainer = document.querySelector('.container');

console.log(gridContainer)

for(i=0;i<16;i++) //16 will become a dynamic variable 
 {
  const grid = document.createElement('div');
  grid.classList.add('grid')
  gridContainer.appendChild(grid); 
}