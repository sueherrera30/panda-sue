
var imagenesTotales= document.getElementsByClassName("casitaImagen");
var tachecito=document.getElementsByClassName("tacheCerrar");

for(var i=0;i<tachecito.length;i++){
  imagenesTotales[i].addEventListener("click",ocultarImagen);
}
function ocultarImagen() {
  this.style.display="none";
}
