function comprobar_blancos() {
	//Variables
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var email = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;
	var fecha = document.getElementById("fecha").value;

	var error = false; /*Bandera*/

	if(nombre=="" || apellidos=="" || email=="" || telefono=="" || fecha=""){
		error = true; /*AL haber campos en blanco, saltamos el error*/
		alert("Debe rellenar todos los campos del formulario para ser enviado.");
	}
	else{
		/*No hay ningun campo vacio*/
		resetearCampos(nombre, apellidos, email, telefono, fecha);

		if(isNaN(telefono) || cantidadNumeros(telefono)){
			/*No es un numero, o faltan numeros para completar un numero de telefono.*/
			error = true;
			alert("Número de telefono no valido.");
		}

		if(!isNaN(fecha)){
			/*No es correcta la fecha*/
			error = true;
			alert("Fecha incorrecta.");
		}

		comprobarCheck();

		if(error = false)
			resetearCampos();
	}
}

function comprobarCheck() {
	var java = document.getElementById("cb-java").checked;
	var db = document.getElementById("cb-db").checked;
	var python = document.getElementById("cb-python").checked;
	var html = document.getElementById("cb-html").checked;
	var css = document.getElementById("cb-css").checked;

	if(!java && !db && !python && !html && !css)
		alert("No cumples con los requisitos mínimos.");
}

function resetearCampos() {
	document.getElementById("nombre").value = "";
	document.getElementById("apellidos").value = "";
	document.getElementById("email").value = "";
	document.getElementById("telefono").value = "";
	document.getElementById("fecha").value = "";
	document.getElementById("cb-java").checked = false;
	document.getElementById("cb-db").checked = false;
	document.getElementById("cb-python").checked = false;
	document.getElementById("cb-html").checked = false;
	document.getElementById("cb-css").checked = false;
}

function cantidadNumeros(telefono) {
	if(telefono.toString().length == 9)
		return 1;
	else 
		return 0;
}