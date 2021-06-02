var canvas2=document.getElementById("canvas10");
var twod_drawing=canvas2.getContext("2d");
var colorline="Black";
var widthline=5;
var mouseevents="empty";
var lastx,lasty;
var currentx,currenty;
canvas2.addEventListener("mousedown",select)
function select(e){
    colorline=document.getElementById("text_input").value;
    widthline=document.getElementById("text_input2").value;
    mouseevents="mousedown";
    console.log(mouseevents);
}
canvas2.addEventListener("mousemove",draw)
function draw(e){
    currentx=e.clientX-canvas2.offsetLeft;
    currenty=e.clientY-canvas2.offsetTop;
    if(mouseevents=="mousedown"){
        twod_drawing.beginPath();
    twod_drawing.strokeStyle=colorline;
    twod_drawing.lineWidth=widthline;
    twod_drawing.moveTo(lastx,lasty);
    twod_drawing.lineTo(currentx,currenty);
    twod_drawing.stroke();
    console.log(currentx)
    console.log(currenty)
    }
    lastx=currentx;
    lasty=currenty;
    console.log(mouseevents);
}
canvas2.addEventListener("mouseleave",stop)
function stop(e){
    mouseevents="mouseleave";
    console.log(mouseevents);
}
canvas2.addEventListener("mouseup",stop1)
function stop1(e){
    mouseevents="mouseup";
    console.log(mouseevents);
}
var touchwidth= screen.width;
var newwidth=screen.width-20;
var newheight=screen.height-20;
if (touchwidth<992){
    document.getElementById("canvas10").width=newwidth;
    document.getElementById("canvas10").height=newheight;
}
canvas2.addEventListener("touchstart",down);
function down(e){
    colorline=document.getElementById("text_input").value;
    widthline=document.getElementById("text_input2").value;
    lastx=e.touches[0].clientX-canvas2.offsetLeft;
    lasty=e.touches[0].clientY-canvas2.offsetTop;
    mouseevents="touchstart";
    console.log(mouseevents);
}
canvas2.addEventListener("touchmove",move);
function move(e){
    currentx=e.touches[0].clientX-canvas2.offsetLeft;
    currenty=e.touches[0].clientY-canvas2.offsetTop;
    twod_drawing.beginPath();
    twod_drawing.strokeStyle=colorline;
    twod_drawing.lineWidth=widthline;
    twod_drawing.moveTo(lastx,lasty);
    twod_drawing.lineTo(currentx,currenty);
    twod_drawing.stroke();
    lasty=currenty;
    lastx=currentx;
    mouseevents="touchmove";
    console.log(mouseevents);
}
function Clear(){
    twod_drawing.clearRect(0,0,canvas2.width,canvas2.height)
}