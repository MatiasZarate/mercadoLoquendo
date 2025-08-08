window.addEventListener("load", function(){
    let formulario = document.getElementById("formularioRegistro")

    formulario.addEventListener("submit", function(e){
        let errores = [];

        let nombre = document.getElementById("nombre")
        if(nombre.value === ""){
            errores.push("el campo de nombre no puede estar vacio")
        }
        let contraseña = document.getElementById("password")
        if(contraseña.value == ""){
            errores.push("el campo de contraseña no puede estar vacio")
        }
        let email = document.getElementById("email")
        if(email.value == ""){
            errores.push("el campo de email no puede estar vacio")
        }
        let edad = document.getElementById("edad")
        if(edad.value == ""){
            errores.push("el campo de edad no puede estar vacio")
        }
      /*  let robot = document.getElementById("robot")
        if(robot.value == ""){
            errores.push("porfavor haga la verificacion")
          let terminos = document.getElementById("terminos")
        if(terminos.value == ""){
            errores.push("porfavor acepte los terminos")
        }*/
        /*let imagen = document.querySelector("input[type='file']");
        if (!imagen.value) {
          errores.push("Debes subir una imagen de perfil");
        }*/
        

        if(errores.length > 0){
            e.preventDefault();
            ulErrores = document.querySelector("div.errores ul")
            ulErrores.innerHTML = " "
            for(let i=0; i < errores.length; i++){
            
             ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
             
            }
        }
    })
})