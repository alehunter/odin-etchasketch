


document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'space-between';
document.body.style.alignItems = 'center';



let length = prompt('Enter length amount')
if (length > 100) {
    length = 100;
}


let grid = document.createElement('div');


grid.style.cssText = ' \
width: 800px; border: 5px solid red;\
height: 800px;\
display: flex;\
flex-wrap: wrap';


var colorArray = [
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

let squares = [];

let n = length;
let calc = (100/n)*.894;
let base = calc.toString();
let str = base + '%';

for(let i = 0; i < n*n; i++){
   let elem = document.createElement('div');
   elem.classList.add('square');
   elem.style.width = str;
   elem.style.height = str;
   elem.style.display = 'flex';
   elem.style.justifyContent = 'center';
   elem.style.alignItems = 'center';


   
   let isDown = false;
 

   document.body.addEventListener('mousedown', function(){
    isDown = true;
    
   })

   document.body.addEventListener('mouseup', function(){
    isDown = false;
   })


   elem.addEventListener('mousedown', function(){
    isDown = true;
    elem.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)];
   })

   elem.addEventListener('mouseover', function(){
    if(isDown == true){
        elem.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)];
    }
   
   })
   

   squares.push(elem);
   
   grid.appendChild(elem);
}
document.body.appendChild(grid);


const squarearray = Array.from(squares);

const reset = document.createElement('button');
reset.textContent = "RESET";
reset.style.fontSize = '30px';
reset.style.width = 'fitcontent';

document.body.appendChild(reset);


reset.addEventListener('click', function(){
    for(let i = 0; i < squarearray.length; i++){
        squarearray[i].style.backgroundColor = 'white';
        
    }
});



