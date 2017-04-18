
var imagenesTotales= document.getElementsByClassName("casitaImagen");
var tachecito=document.getElementsByClassName("tacheCerrar");


for(var i=0;i<tachecito.length;i++){
  imagenesTotales[i].addEventListener("click",ocultarImagen);
}
function ocultarImagen() {
  this.style.display="none";
}

var botonRestaurar = document.getElementById('restaurando');
botonRestaurar.addEventListener("click",restaurar);

function restaurar(){
  for(var i=0;i<imagenesTotales.length;i++){
imagenesTotales[i].style.display="inline-block";
}
}

var botonOrigen = document.getElementById('elOrigen');
botonOrigen.addEventListener("click",Origen);
function Origen(){
 var origenTexto= document.getElementById("texto1");
 if(origenTexto.style.display=="none"){
   origenTexto.style.display="inline-block";
 }
 else{
   origenTexto.style.display= "none";
 };

}

var botonExtincion =document.getElementById("extinguiedo");
botonExtincion.addEventListener("click",extincion);

function extincion(){
  var extincionTexto= document.getElementById("texto2");
  if(extincionTexto.style.display=="none"){
    extincionTexto.style.display="inline-block";
  }
  else{
    extincionTexto.style.display= "none";
  };
}
