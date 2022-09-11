

function formatDocument(){
    let docvar = document.body.style;

    docvar.display = 'flex';
    docvar.flexDirection = 'row';
    docvar.justifyContent = 'center';
    docvar.alignItems = 'center';
    document.body
    docvar.width = '95%';
    docvar.height = '95%';
}


// function createInputLabel(){
//     const input = document.createElement('input');
// }

function createClearButton(elementsToClear){
   //takes an argument "elementsToClear". An array of elements to set backgroundColors to white
   
    //creating button
    let button = document.createElement('button');
    button.textContent = 'CLEAR';

    //using a shorthand variable to use css
    let buttonvar = button.style;
    buttonvar.padding = '10px';
    buttonvar.fontSize = '20px';
    buttonvar.fontFamily = 'sans-serif'

    //creating button clearing functionality
    button.addEventListener('click', function(){
        elementsToClear.forEach(element => {
            element.style.backgroundColor = 'white';
        });
    })

    return button
}

function createControls(grid){

    //creating and editing CONTROLS div
    const controls = document.createElement('div');
    controls.style.cssText = "display: flex; flex-direction: column; justify-content: space-between; align-items: center;\
    margin-left: 20px; height: 700px; width: fit-content;";

    //creating and editing CONTROLS elements
    const elementsToChange = grid.squares;
    const button = createClearButton(elementsToChange);
    // const input = createInputLabel(elementsToChange);

    //adding CONTROLS elements to div
    // controls.appendChild(input);
    controls.appendChild(button);


    return controls;
}


function createSquare(squarelengthstring){
    //createSquares takes a string "squarelengthstring" as an argument that represents the length n,
    // by which the nxn square will be constructed
    const COLORARRAY = [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF"
    ];
    //creating square, defining basic dimensions
    let square = document.createElement('div');
    square.style.width = squarelengthstring;
    square.style.height = squarelengthstring;

    //flag isDown is used to be able to detect down and drag movements to paint squares
    let isDown = false;

    document.body.addEventListener('mousedown', function () {
        isDown = true;
    });

    document.body.addEventListener('mouseup', function () {
        isDown = false;
    });

    square.addEventListener('mousedown', function () {
        isDown = true;
        square.style.backgroundColor = COLORARRAY[Math.floor(Math.random() * COLORARRAY.length)];
    });

    square.addEventListener('mouseover', function () {
        if (isDown == true) {
            square.style.backgroundColor = COLORARRAY[Math.floor(Math.random() * COLORARRAY.length)];
        }
    });

    return square;
}

function createGrid(gridlength, numsquares){
    
    //define basic grid details
    let grid = document.createElement('div');
    let gridlengthstring = gridlength.toString();
    gridlengthstring += "px";
    grid.style.height = gridlengthstring;
    grid.style.width = gridlengthstring;
    grid.style.border = '3px solid red';
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    
    //calculate square dimensions
    const squarelength = gridlength/numsquares;
    let squarelengthstring = squarelength.toString();
    squarelengthstring += "px";

    //create squares
    //squares array is used so squares can be accessed by outside functionality.
    let squares = [];
    for(let i = 0; i < numsquares*numsquares; i++){
        square = createSquare(squarelengthstring)
        squares.push(square);
        grid.appendChild(square);

    }


    const gridobj = {
        grid: grid,
        squares: squares
    }

    return gridobj;

}

function main(){

    //LENGTH AND SQUARE AMOUNT CONSTANTS
    const GRIDLENGTH = 800;
    const NUMSQUARES = 20;

    //formatting document.body
    formatDocument();

    //creating GRID
    const grid = createGrid(GRIDLENGTH, NUMSQUARES);
    

    //creating controls
    const controls = createControls(grid);

    //adding elements to document body
    document.body.appendChild(grid.grid);
    document.body.appendChild(controls)
    

}

main();