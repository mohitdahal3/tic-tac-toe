let rows = 3
let cols = 3
let grid, w
let crossturn = true
let gameover = false

function setup() {
    console.log('#ayush vude');
    createCanvas(400, 400);
    w = floor(height / rows)
    grid = make2darray(3, 3)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            grid[i][j] = new Cell(i, j)
        }
    }
}


function draw() {
    if (!gameover) {
        background(0)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                grid[i][j].show()
            }
        }
        isGAmeover()
    }
}

function mouseClicked() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j].includesmouse()) {
                if (grid[i][j].cross === undefined) {
                    grid[i][j].cross = crossturn
                    crossturn = !crossturn
                }

            }
        }
    }
}

function make2darray(r, c) {
    let arrr = new Array(r)
    for (let i = 0; i < arrr.length; i++) {
        arrr[i] = new Array(c)
    }
    return arrr
}


function isGAmeover(){
    for(let i = 0 ; i < 3; i++){
        if(grid[i][0].cross == grid[i][1].cross && grid[i][0].cross == grid[i][2].cross && grid[i][0].cross !== undefined){
            gameover = true
            stroke(0, 255, 0 ,100)
            strokeWeight(3)
            line((i*w)+w/2 , 40 , (i*w)+w/2 , height-40 )
            setTimeout(() => {
                let a = confirm('Gameover. play again?')
                if(a){
                    window.location.reload()
                }
            }, 1000);
            return
        }
    }
    
    for(let i = 0 ; i < 3; i++){
        if(grid[0][i].cross == grid[1][i].cross && grid[0][i].cross == grid[2][i].cross && grid[0][i].cross !== undefined){
            gameover = true
            stroke(0, 255, 0,100)
            strokeWeight(3)
            line(40 , (i*w)+w/2 ,width-40,(i*w)+w/2  )
            setTimeout(() => {
                let a = confirm('Gameover. play again?')
                if(a){
                    window.location.reload()
                }
            }, 1000);
            return
        }
    }

    if(grid[0][0].cross == grid[1][1].cross && grid[0][0].cross == grid[2][2].cross && grid[2][2].cross !== undefined){
        gameover = true
        stroke(0, 255, 0,100)
            strokeWeight(3)
            line(40,40,width-40,height-40)
            setTimeout(() => {
                let a = confirm('Gameover. play again?')
                if(a){
                    window.location.reload()
                }
            }, 1000);
            return
    }
    if(grid[2][0].cross == grid[1][1].cross && grid[2][0].cross == grid[0][2].cross && grid[0][2].cross !== undefined){
        gameover = true
        stroke(0, 255, 0,100)
            strokeWeight(3)
            line(width-40,40,40,height-40)
            setTimeout(() => {
                let a = confirm('Gameover. play again?')
                if(a){
                    window.location.reload()
                }
            }, 1000);
            return

    }
    let c = 0
    grid.forEach(column => {
        column.forEach(cell => {
            if(cell.cross !== undefined){
                c++; 
            }
        });
    });
    if(c==9){
        setTimeout(() => {
            let b = confirm('Its a tie. play again?')
            if(b){
                window.location.reload()
            }   
        }, 50);
        gameover = true
    }


}