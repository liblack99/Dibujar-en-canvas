
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoporclick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

   while(l < lineas)
   {
     yi = espacio * l;
     xf = espacio *(l + 1);
     dibujarlinea("black", 0, yi, xf, 300)
     dibujarlinea("black", 300, yi, xf, 0)
     console.log("linea " + 1)
     l = l + 1;
  }

   dibujarlinea("green", 1, 1, 1, ancho );
   dibujarlinea("green", 1, ancho, ancho, ancho );
}
