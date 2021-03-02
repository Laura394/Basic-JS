var texto = document.getElementById("text_lineas");
var button = document.getElementById("boton");
button.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var espacio = ancho / lineas;

while(l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l +1);
    dibujarLinea("grey", 0, yi, xf, 300);
    console.log("Linea " + 1);
    l++;
}

dibujarLinea("black", 1,1,1,300);
dibujarLinea("black", 0,300,300,300);

for(l = 0; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l +1);
    dibujarLinea("grey", 300, yi, xf, 0);
}
}