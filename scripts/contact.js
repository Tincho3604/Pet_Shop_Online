 window.addEventListener('DOMContentLoaded', inicio, false);

function inicio() {
  document.getElementById("formulario1").addEventListener('submit', validar, false);
}

function validar(evt) {
  //  var timeoutId;
 



  var mensaje = document.getElementById("mensaje")
  var cla1 = document.getElementById("nombre").value;
  var cla2 = document.getElementById("apellidos").value;
  var cla3 = document.getElementById("correo").value;
  var cla4 = document.getElementById("telefono").value;
  var cla5 = document.getElementById("nombres").value;
  var cla6 = document.getElementById("m").value;
  var cla7 = document.getElementById("hm").value;
  var cla8 = document.getElementById("raza").value;

  if ((cla1) && (cla2) && (cla3) && (cla4) && (cla5) && (cla6) && (cla7) && (cla8)) {
    mensaje.style.display = "block"

     document.querySelector(".btn-enviar").addEventListener('click', () => {
    timeoutId = setTimeout(() => {
    location.reload()
   },1000)
   })


    evt.preventDefault();
      
     }

    }

