/*function calcular(valor){
	let igv;
	igv=valor*0.18;	
	return igv;
}

// registrar Factura

let igv=calcular(100);

// 
si igv es mayor 
 //
si es menor 
// 


//variable tipo fecha
let calcularNuevo=()=>{
	// hace tareas especificas
}


let igv=(valor)=>{return valor*0.18}


function igv(valor){
	return valor*0.18
}

let igv = valor => valor*0.18



*/
function operaciones(valor1,valor2){
	let resultadoSuma=suma(valor1,valor2)
	let resultadoResta=suma(valor1,valor2)
	/*let listadoResultado[];
	listadoResultado.push(resultadoSuma)
	listadoResultado.push(resultadoResta)*/

	let obj_respuestas={
		res_suma:0,
		res_resta:0
	}

	obj_respuestas.res_suma=resultadoSuma;
	obj_respuestas.res_resta=resultadoResta;


	return obj_respuestas;
}

function suma(n1,n2){
	return n1+n2;
}
function resta(n1,n2){
	return n1-n2;
}

let respuestas=operaciones(10,30);

console.log(respuestas)
console.log("la respuesta de la suma es")
console.log(respuestas.res_suma)





function operar(num1,num2,operador){
	/*if(4>2){
		// si es verdadero;
	}
	else{
		// si es falso;
	}
	*/
	/*
	if(operador=="+"){
		num1+num2;
	}
	else{
		if(operador=="-"){
			num1-num2	
		}
		else{
			if(operador=="/"){
				num1/num2
			}
			else{
				if(operador=="*"){
					num1*num2
				}
				else{
					console.log("el valor ingresado no corresponde a un operador")
				}
			}
		}
		
	}*/


	let resultado;

	if(operador=="+"){
		resultado=num1+num2;
	}
	else if(operador=="-"){
		resultado=num1-num2;
	}
	else if(operador=="*"){
		resultado=num1*num2;
	}
	else if(operador=="/"){
		resultado=num1/num2;
	}
	else{
		resultado=false;
		//console.log("el valor ingresado no corresponde a un operador")

	}

	return resultado;

}


console.log(operar(10,20,"+"))
console.log(operar(10,4,"-"))
console.log(operar(10,4,"/"))
console.log(operar(10,4,"*"))
console.log(operar(10,4,"938"))



if(1 === "1"){
	console.log("son iguales");
}
else{
	console.log("son diferentes");
}


















