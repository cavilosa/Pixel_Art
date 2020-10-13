/*jshint esversion: 6 */

// varibale to make a table with art
const canvas = document.querySelector("#pixelCanvas");
// var button
const button = document.querySelector("[type='submit']");


// bitton reacts to click and returns the function
button.addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid(); // contructs the grid/table
});


// function to draw a table/grid and color the cells or decolor them
function makeGrid() {
    canvas.innerHTML = ""; // to clear the HTML from the table
    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;

// loop to make a grid and color the cells
    for (var r = 0; r < height; r++) {
        const row = document.createElement("tr");
        for (var c = 0; c < width; c++) {
            var cell = document.createElement("td");
            // clict the cell to color it
            cell.addEventListener("click", function(e) {
              var color = document.querySelector("#colorPicker").value;
              e.target.style.backgroundColor = color;
            });
            // Doubleclick to decolor the cell back
            cell.addEventListener("dblclick", function(e) {
                 e.target.style.backgroundColor = "white";
            });
        row.appendChild(cell); // add cell to the row
    canvas.appendChild(row); // add raw to the table/grid/canvas
        }
    }
}
