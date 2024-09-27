const mainCanvas = document.getElementById('myCanvas');
const context = mainCanvas.getContext('2d');

let initialX;
let initialY;

const dibujar = (cursorX, cursorY) =>{
    context.beginPath();
    context.moveTo(initialX, initialY)
    context.lineWith = 50;
    context.strokeStyle = '#000';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineTo(cursorX,cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
}

const cleanPage = ()=>{
    context.clearRect(0,0,1920,1080)
}

const mouseDown = (evt) =>{
    initialX= evt.offsetX;
    initialY= evt.offsetY;
    dibujar(initialX,initialY);
    mainCanvas.addEventListener('mousemove', mouseMoving)
};

const mouseMoving = (evt) =>{
    dibujar(evt.offsetX, evt.offsetY)
}

const mouseUp = ()=>{
    mainCanvas.removeEventListener('mousemove', mouseMoving);
}

mainCanvas.addEventListener('mousedown', mouseDown);
mainCanvas.addEventListener('mouseup', mouseUp);
