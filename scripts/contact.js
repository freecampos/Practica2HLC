function comprobarBlancos() {
	var nombre = document.getElementById("nombre-contacto").value;
	var apellidos = document.getElementById("apellidos-contacto").value;
	var email = document.getElementById("email-contacto").value;
	var telefono = document.getElementById("telefono-contacto").value;
	var fecha = document.getElementById("fecha-nac").value;
	var bandera = false;

	if(nombre == "" || apellidos == "" || email == "" || telefono == "" || fecha == ""){
		bandera = true;
		alert("Debe rellenar todos los campos del formulario para ser enviado.");
	}
	else{

		if(isNaN(telefono)){
			/*No es un numero, o faltan numeros para completar un numero de telefono.*/
			bandera = true;
			alert("Número de telefono no valido.");
		}

		bandera = comprobarChecks();

		if(bandera){
			resetearCampos();
		}
		else{
			alert("Solicitud correcta.");
			resetearCampos();
		}
		
	}
}

function comprobarChecks() {
	var java = document.getElementById("cb-java").checked;
	var db = document.getElementById("cb-db").checked;
	var python = document.getElementById("cb-python").checked;
	var html = document.getElementById("cb-html").checked;
	var css = document.getElementById("cb-css").checked;

	if(!java && !db && !python && !html && !css){
		alert("No cumples con los requisitos mínimos.");
		return true;
	}

	return false;
}

function resetearCampos() {
	document.getElementById("nombre-contacto").value = "";
	document.getElementById("apellidos-contacto").value = "";
	document.getElementById("email-contacto").value = "";
	document.getElementById("telefono-contacto").value = "";
	document.getElementById("fecha-nac").value = "";
	document.getElementById("cb-java").checked = false;
	document.getElementById("cb-db").checked = false;
	document.getElementById("cb-python").checked = false;
	document.getElementById("cb-html").checked = false;
	document.getElementById("cb-css").checked = false;
}