var colorLinea = "green"; //color de la linea

document.addEventListener("mousedown", clickMouse); //cuando presionas click
document.addEventListener("mouseup", soltarMouse); //cuando sueltas el click
document.addEventListener("mousemove", dibujarMouse); //cuando mueves el mouse
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x; 
var y;
var x1;
var y1;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento) //funcion para mousemove
{

        x = evento.offsetX;
        y = evento.offsetY;
        dibujarLinea(colorLinea, x1, y1, x, y, papel);
        x1 = x;
        y1 = y;
    
}

function clickMouse(evento) //funcion para mousedown
{
}

function soltarMouse(evento) //funcion para mouseup
{
}
