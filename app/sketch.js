//conway's game of life

let canvas = document.querySelector('canvas');
let pencil = canvas.getContext('2d');

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
let cols = canvas.width;
let rows = canvas.height;

function setup() {
    grid = make2dArray(cols, rows);
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            grid[i][j] = Math.floor(Math.random() * 2);
        }
    }
}
setup();

function drawGrid() {
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            if(grid[i][j] == 1) {
                pencil.fillStyle = 'black';
                pencil.fillRect(
                    (canvas.width - (i * (canvas.width * 0.01))), //x
                    (canvas.height - (j * (canvas.height * 0.01))), //y
                    (canvas.width * 0.01), //w
                    (canvas.height * 0.01) //h
                )
            }
        }
    }
}
drawGrid();
