window.addEventListener("load", function(){
   var audio = document.getElementById(`miAudio`);
    document.getElementById("buton").addEventListener('click', function () {
        const boton = this; // Referencia al botón
       
          //audio
          if(audio){
            audio.play().catch((error)=>{
              console.error("error al reproducir el audio >:v", error);
            })};

            setTimeout(() => {
              window.location.href = "/secciones"; 
            }, 3000);
      });
})
