function mostrarFechaYHora(){
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  var fecha = new Date()
  hora = fecha.getHours()
  minuto = fecha.getMinutes()
  segundo = fecha.getSeconds()

  horaImprimible = diasSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear() + " a las " + hora + ":" + minuto + ":" + segundo

  document.form_fecha_hora.fecha_hora.value = horaImprimible

  setTimeout("mostrarFechaYHora()",1000)
}