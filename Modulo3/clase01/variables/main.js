var num1;
var num2;
var n1;
var n2;

//

var num1=10;
var num2=30;


var n1="20";
var n2="30";



var suma= n1+n2;
var suma="20"+"30" //2030


var nombre="JC"
var apellido="RT"
var nombrecompleto=nombre+" "+apellido // JCRT
var nombrecompleto="JC"+ " "+"RT"  // JC RT



var suma=n1+n2;
var n1="20";
var n2="10";

var resta=n1-n2;
console.log(resta);


var n1="30";
console.log(n1);
//var cambio=n1-0;
var cambio=parseInt(n1);
console.log(cambio);



var mayor=Math.max(20,340,56);
console.log(mayor);
var minimo=Math.min(20,304,5);
var potencia=Math.pow(2,4);
var raiz=Math.sqrt(144);
var entero=Math.round(12.3);

var numero=Math.random()*10;
console.log(numero);
console.log(Math.round(numero));

/*
Math.min();
Math.PI;
Math.pow();
Math.sqrt();
Math.randomd();
*/


var estado=true;

var estado=false;


var condicion=2;
var condicion=-1;
/*
if(condicion){

}
*/


var fecha="25 de mayo del 2019";


console.log(fecha);


var fecha_actual=new Date();


console.log(fecha_actual);
console.log(fecha_actual.getFullYear()); // año actual

var anio=fecha_actual.getFullYear();
console.log(anio);

console.log(fecha_actual.getDate());  // dia del mes
console.log(fecha_actual.getMonth()); // mes del año
console.log(fecha_actual.getDay()); // dia semana
console.log(fecha_actual.getHours()); // la hora actual
console.log(fecha_actual.getMinutes());
console.log(fecha_actual.getSeconds());
var hora=fecha_actual.getHours();
var minutos=fecha_actual.getMinutes();
var segundos=fecha_actual.getSeconds();

var formato_hora="la hora es : "+ hora + " con " + minutos +" minutos y " + segundos +" segundos";
console.log(formato_hora);


var listado;

var listado=[12,34,56,"Jc",true,"correo@gmail.com"];

console.log(listado);



var n1=10;
var n2=320;
var listado=[true,false,n1,n2];  // [true,false,10,320];

var nuevo_listado=["JC","RT",listado]; // ["JC","RT",true,false,10,320];
				  // ["JC","RT",[true,false,n1,n2]]


console.log(listado);

console.log(nuevo_listado);

var dias_semana=["Domingo",
				 "lunes",
				 "martes",
				 "miercoles",
				 "jueves",
				 "viernes",
				 "sábado",
				 ];

console.log(dias_semana);

console.log(dias_semana[0]);

console.log(dias_semana[3]);

var ultimo=dias_semana.length-1;

console.log(dias_semana[ultimo]);

var dia_semana=fecha_actual.getDay()
console.log(dia_semana);

var nombre_dia=dias_semana[dia_semana]

console.log(nombre_dia);






// usuario=[id,usuario,pass,estado_usuario];

var usuario=[1,"JC","asdasw23",true];

var persona={
	nombre:"JC",
	pass:"123123",
	estado:true,
	id:1,
	sede:"Area",
	correo:"jc@gmail.com"
}
usuario[0];
usuario[1];
persona.nombre;
persona.id;
persona.correo;

var telefono={
	marca:"HUAWEI",
	modelo:"P30",
	precio:100
}

var telefono2={
	marca:"Apple",
	modelo:"Iphone X",
	precio:200
}

var lista_telefono=[telefono,telefono2]

console.log(lista_telefono);

console.log(lista_telefono[0]);

var telefono=lista_telefono[0];
telefono.marca;


console.log(lista_telefono[1]);


lista_telefono[0].marca;
lista_telefono[1].marca;

var nombre="por defecto";
var apellido;
var correo;
var telefono;

nombre="Jc"
apellido="RT"


var usuario={
	nombre:"por defecto",
	apellido:"",
	correo:"",
	dni:"",
	telefono:""
}
var usuario
var usuario.password
;

usuario.nombre="JC";
usuario.apellido="RT"
usuario.correo="corroe@gmail.com"
usuario.dni="123123"
usuario.telefono="123123"
usuario.password="123abcs";

console.log(usuario);


/*
let telefono=lista_telefono[1]

telefono.marca
*/



































