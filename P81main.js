canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "red";
color1 = "blue";
color2 = "yellow";
color3 = "black";
color4 = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetLeft;
    console.log("x = " + mouseX + " , " + "y = " + mouseY);
}

function logo(e) {
    circle(153, 217);
    circle1(215, 308);
    circle2(250, 270);
    circle3(501, 361);
    circle4(525, 277);
}

function circle() {
    ctx.beginPath();
    ctx.strokeStyle = color1;
    ctx.lineWidth = 4;
    ctx.arc(193, 267, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

function circle1() {
    ctx.beginPath();
    ctx.strokeStyle = color2;
    ctx.lineWidth = 4;
    ctx.arc(290, 330, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

function circle2() {
    ctx.beginPath();
    ctx.strokeStyle = color3;
    ctx.lineWidth = 4;
    ctx.arc(380, 270, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

function circle3() {
    ctx.beginPath();
    ctx.strokeStyle = color4;
    ctx.lineWidth = 4;
    ctx.arc(471, 341, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

function circle4() {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(565, 277, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

function clearcanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}