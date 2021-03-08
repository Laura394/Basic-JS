var vp = document.getElementById("villap");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: true
}

var cerdo = {
    url: "cerdo.png",
    cargaOk: true
}

var pollo = {
    url: "pollo.png",
    cargaOK: true
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    fondo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        var cantidad = aleatorio(1, 10);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 60;
            var y = y * 60
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOk)
    {
        var cantidad = aleatorio(1, 10);
        for(var v=0; v < cantidad; v++)
        {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 60;
        var y = y * 60
        papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOk)
    {
        var cantidad = aleatorio(1, 10);
        for(var v=0; v < cantidad; v++)
        {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        var x = x * 60;
        var y = y * 60
        papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}