// Write a JavaScript function that creates a <p> element with the text "Hello, World!" and appends it to the <body>.

function createElement(){
    var p = document.createElement('p');
    p.innerText = 'Hello World!!';
    var body = document.body;
    body.appendChild(p);
}

createElement()

// Create a div element using createElement, then assign it the class "box" using .className. Finally, append this div to the document's body.

function createDiv(){
    var div = document.createElement('div');
    div.className = 'box';
    document.body.appendChild(div);
}
createDiv()

// Create a <button> element dynamically and add two classes: "btn" and "btn-primary". Append the button to an existing div with id="container".

function createButton(){
    var button = document.createElement('button');
    button.classList.add('btn','btn-primary');
    button.innerText = 'Click Me';
    var display = document.getElementById('container');
    display.appendChild(button);
}
createButton();

// Dynamic Chees Board

function createBoard(){
    var boardsize = document.getElementById('boardsize').value;
    var displaychees = document.getElementById('displayBoard')
    displaychees.style.height = `${boardsize*100}px`;
    displaychees.style.width = `${boardsize*100}px`;

    var row,col;
    for(row=0;row<boardsize;row++){
        for(col=0;col<boardsize;col++){
            var box = document.createElement('div');
                box.className='box1';
            if((row+col)%2===0){
                box.classList.add('white');
                box.innerText = '*';
            }else{
                box.classList.add('black');
                box.innerText = '#';
            }
            displaychees.appendChild(box)
        }
    }
}

