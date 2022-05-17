

function make2dArray(cols, rows) {
    let arr = new Array(cols);
    let i = 0;
    while(i < arr.length) {
        arr[i] = new Array(rows);
        i++;
    }
    return arr;
}

let grid;
let cols = 10;
let rows = 10;

function setup() {
    grid = make2dArray(cols, rows);
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            grid[i][j] = Math.floor(Math.random() * 2);
        }
    }
}

function draw() {
    
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            
        }
    }
}

setup();
