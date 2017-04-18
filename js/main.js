
var imagen= document.getElementsByClassName("casitaImagen");
var tachecito=document.getElementsByClassName("tacheCerrar");


for(var i=0;i<tachecito.length;i++){
  tachecito[i].addEventListener("click",eleccion);
}
function eleccion(){
  ocultarImagen(this)
}

function ocultarImagen(tachecito) {
console.log(tachecito);
  tachecito.parentNode.style.display="none";
}

var botonRestaurar = document.getElementById('restaurando');
botonRestaurar.addEventListener("click",restaurar);

function restaurar(){
  for(var i=0;i<imagen.length;i++){
imagen[i].style.display="inline-block";
}
}

var botonOrigen = document.getElementById('elOrigen');
botonOrigen.addEventListener("click",Origen);
function Origen(){
 var origenTexto= document.getElementById("texto1");
 if(origenTexto.style.visibility=="hidden"){
   origenTexto.style.visibility="visible";
 }
 else{
   origenTexto.style.visibility="hidden";
 };

}

var botonExtincion =document.getElementById("extinguiedo");
botonExtincion.addEventListener("click",extincion);

function extincion(){
  var extincionTexto= document.getElementById("texto2");
  if(extincionTexto.style.visibility=="hidden"){
    extincionTexto.style.visibility="visible";
  }
  else{
    extincionTexto.style.visibility="hidden";
  };

 }
