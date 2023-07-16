import './style.css'

//conway's game of life

let canvas = document.querySelector('canvas')!;
let pencil = canvas.getContext('2d')!;

function make2dArray(cols:number, rows:number) {
    let arr = new Array(cols);
    let i = 0;
    while(i < arr.length) {
        arr[i] = new Array(rows);
        i++;
    }
    return arr;
}

let grid:any;
let res = 5;
let cols:number;
let rows:number;
let speed:number = 5;

function setup() {
    cols = canvas.width / res;
    rows = canvas.height / res;

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
                let x = i * res;
                let y = j * res;
                pencil.fillStyle = '#000000';
                pencil.fillRect(x, y, res - 1, res - 1);
            } else {
                let x = i * res;
                let y = j * res;
                pencil.fillStyle = '#0b5338';
                pencil.fillRect(x, y, res, res);
            }
        }
    }
}

setInterval(() => {
    let next:any[] = make2dArray(cols, rows);

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            let state = grid[i][j];
            let neighbors = countNeighbors(grid, i, j);

            if(state == 0 && neighbors == 3) {
                next[i][j] = 1;
            } else if(state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }
        }
    }
    grid = next;
    drawGrid();
}, speed);

function countNeighbors(grid:any[], x:number, y:number) {
    let sum = 0;
    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

/* setInterval(() => {
    window.location.reload();
}, 20000);
 */

