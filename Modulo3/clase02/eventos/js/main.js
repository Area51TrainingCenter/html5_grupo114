let btn= document.getElementById('cambiarColor');

btn.addEventListener("click",alerta)

let elemento=document.getElementById("title");


function alerta(){
	elemento.classList.remove();
	elemento.classList.add("red");	
	addClass()
//	elemento.style.backgrundColor="blue";
}

function tarea2(){
	elemento.classList.remove();
	elemento.classList.add("blue");	
//	elemento.style.color="red";
}


