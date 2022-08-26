const canvas = document.getElementById("canvas");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

//creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//takes (rows, columns) input and makes new grid
function makeRows(rowNum) {
    //makes rows
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//makes columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newcell).className = "cell";
        };
    };
};