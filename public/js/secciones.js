window.addEventListener("load", function(){
   var audio = document.getElementById(`miAudio`);
      document.getElementById("tarjeta").addEventListener('click', function () {
        const boton = this; // Referencia al botón

            setTimeout(() => {
              window.location.href = "/tarjeta"; 
            }, 1000);
      });
       document.getElementById("registro").addEventListener('click', function () {
        const boton = this; // Referencia al botón

            setTimeout(() => {
              window.location.href = "/registro"; 
            }, 1000);
      });
       document.getElementById("inicioSesion").addEventListener('click', function () {
        const boton = this; // Referencia al botón

            setTimeout(() => {
              window.location.href = "/inicioSesion"; 
            }, 1000);
      });
      document.getElementById("listaUsuarios").addEventListener('click', function () {
        const boton = this; // Referencia al botón

            setTimeout(() => {
              window.location.href = "/listaUsuarios"; 
            }, 1000);
      });
})
