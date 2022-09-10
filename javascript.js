// document.body.style.width = '100%';
// document.body.style.display = 'flex';
// document.body.style.flexDirection = 'column';
// document.body.style.justifyContent = 'center';
// document.body.style.alignItems = 'center';
// document.body.




let grid = document.createElement('div');


grid.style.cssText = ' \
width: 95%; border: 2px solid red;\
height: 50%;\
display: flex;\
flex-wrap: wrap;\
border-collapse: collapse;'
;

// let gridheight = grid.offsetWidth.toString();
// gridheight = gridheight + 'px';
// grid.style.height = gridheight;

let length = prompt("How many squares across?");
if(length > 100){
    length = 100;
}

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


   if(i < n){
    elem.style.backgroundColor = 'blue';
   }
   let isDown = false;
 

   document.body.addEventListener('mousedown', function(){
    isDown = true;
    
   })

   document.body.addEventListener('mouseup', function(){
    isDown = false;
   })


   elem.addEventListener('mousedown', function(){
    isDown = true;
    elem.style.backgroundColor = 'blue';
   })

   elem.addEventListener('mouseover', function(){
    if(isDown == true){
        elem.style.backgroundColor = 'blue';
    }
   
   })
   

   squares.push(elem);
   
   grid.appendChild(elem);
}
document.body.appendChild(grid);


const squarearray = Array.from(squares);

// const reset = document.createElement('button');
// reset.textContent = "RESET";
// reset.style.fontSize = '30px';
// reset.style.width = 'fitcontent';

// document.body.appendChild(reset);


// reset.addEventListener('click', function(){
//     for(let i = 0; i < squarearray.length; i++){
//         squarearray[i].style.backgroundColor = 'white';
        
//     }
// });


