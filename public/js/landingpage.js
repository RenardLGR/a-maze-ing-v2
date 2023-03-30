// With the help of :
// https://www.youtube.com/watch?v=bAwEj_mSzOs
// https://codepen.io/Hyperplexed/pen/zYWvXMM


// This JS handle the create maze

const wrapper = document.querySelector(".maze-board")
let columns = 10
let rows = 9


//Create a tile div
function createTile(index){
    const tile = document.createElement('div')

    tile.classList.add("tile")
    let id = 'tile'+index
    tile.id = id

    tile.onclick = e => toggleTile(index);

    return tile
}

function toggleTile(idx){
    //When a tile is toggled, it has an opacity of 0, meaning we would see the linear gradient in the background
    let tile = document.getElementById('tile'+idx)
    tile.classList.toggle("toggled")
    let isToggled = tile.classList.contains("toggled")
    tile.style.opacity = isToggled ? 0 : 1
}

//Add the tiles to the wrapper
function createTiles(quantity){
    for(let i=0 ; i<quantity ; i++){
        wrapper.appendChild(createTile(i))
    }
}

//Add maze borders, leave two entries on the right and left
function addMazeBorders(){
    let idx = 0
    for(let r=0 ; r<rows ; r++){
        for(let c=0 ; c<columns ; c++){
            if(r===0){ //first line is toggled
                toggleTile(idx)
            }
            if(r===rows-1){ //last line is toggled
                toggleTile(idx)
            }
            if(c===0 && r!==0 && r!==rows-1){ //first col is toggled
                toggleTile(idx)
            }
            if(c===columns-1 && r!==0 && r!==rows-1){ //last col is toggled
                toggleTile(idx)
            }
            idx++
        }
    }

    let randEntry
    do {
        randEntry = Math.floor(Math.random()*rows)
    } while (randEntry===0 || randEntry===rows-1);

    let randExit
    do {
        randExit = Math.floor(Math.random()*rows)
    } while (randExit===0 || randExit===rows-1);

    toggleTile(randEntry*columns)
    toggleTile(randExit*columns + columns-1)
}

function createGrid(){
    wrapper.innerHTML = ""
    // let wrapperwidth = 0
    // let wrapperhHight = 0
    // colums = 0
    // rows = 0
    let quantity = columns * rows

    //Update CSS
    wrapper.style.setProperty("--columns", columns)
    wrapper.style.setProperty("--rows", rows)

    createTiles(quantity)
    // addMazeBorders()
}

createGrid()

// window.onresize = () => createGrid()