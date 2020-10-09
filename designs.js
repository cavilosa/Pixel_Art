//const height = document.querySelector("#inputHeight").value;
//const width = document.querySelector("#inputWidth").value;
//let colorPicker = document.querySelector("#colorPicker").value;
let canvas = document.querySelector("#pixelCanvas");
const button = document.querySelector("[type='submit']");


button.addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    canvas.innerHTML = ""; // to clear the HTML from the table.
    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;

    for (var r = 0; r < height; r++) {
        var row = document.createElement("tr");
        for (var c = 0; c < width; c++) {
            var cell = document.createElement("td");
            cell.addEventListener("click", function(e) {
              var color = document.querySelector("#colorPicker").value;
              e.target.style.backgroundColor = color;
            })
            cell.addEventListener("dblclick", function(e) {
                 e.target.style.backgroundColor = "white";
            })
        row.appendChild(cell);
    canvas.appendChild(row);
        }
    }
};
