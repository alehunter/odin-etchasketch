document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';

let grid = document.getElementById('grid');


grid.style.cssText = ' \
width: 100%;\
height: 500px;\
display: flex;\
flex-wrap: wrap;\
border-collapse: collapse;';

let squares = [];

colors = ['red', 'yellow', 'blue'];

for(let i = 0; i < 25; i++){
   let elem = document.createElement('div');
   elem.classList.add('square');
   elem.style.width = '18%';
   elem.style.height = '20%';
   elem.style.display = 'flex';
   elem.style.justifyContent = 'center';
   elem.style.alignItems = 'center';
   elem.style.borderColor = 'red';
   elem.style.borderWidth = '2px';
   elem.style.borderStyle = 'solid';
   
   elem.textContent = ''+ (i+1);
   elem.setAttribute('clickamount', 0);
   
   
   elem.addEventListener('click', function(){
    elem.style.backgroundColor = colors[elem.getAttribute('clickamount')];
    elem.setAttribute('clickamount', (elem.getAttribute('clickamount')+1)%3);
   });
   squares.push(elem);
   
   grid.appendChild(elem);
}

const squarearray = Array.from(squares);

const reset = document.createElement('button');
document.body.appendChild(reset);
reset.textContent = "RESET";
reset.style.fontSize = '30px';
reset.style.width = 'fitcontent';
reset.style.justifySelf = 'center';
reset.style.alignSelf = 'center';
reset.style.marginTop = '100px';

reset.addEventListener('click', function(){
    for(let i = 0; i < squarearray.length; i++){
        squarearray[i].setAttribute('clickamount', 0);
        squarearray[i].style.backgroundColor = 'white';
    }
});

const directions = document.createElement('div');
document.body.appendChild(directions);

directions.textContent = 'Click element once for red, twice for blue and three times for yellow';
directions.style.fontSize = '30px';
directions.style.justifySelf = 'center';
directions.style.alignSelf = 'center';
directions.style.marginTop = '40px';
directions.style.fontFamily = 'sans-serif';
