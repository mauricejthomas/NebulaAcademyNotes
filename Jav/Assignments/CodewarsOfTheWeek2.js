
// Function (gridIndex) and parameters (grid, indices) are given
function gridIndex(grid, indices) {
// Create variable to concatenate the grid into one large array.    
    let oneLove = grid.flat();
// Create variable to serve as placeholder    
    let placeHolder = '';
// Loop through the length of the entire array(grid) from left to right.    
    for(let i = 0; i < indices.length; i++){
// Find the indice in array(grid) and add to placeholder        
      placeHolder += oneLove[indices[i] - 1];
    }
// Return final outcome    
    return placeHolder