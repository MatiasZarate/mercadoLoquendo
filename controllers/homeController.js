const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//aca pon todo lo de mysql
const mysql = require("mysql");

let conexion = mysql.createConnection({
    host:"localhost", 
    database:"loquendo",
    user:"root",
    password:""
})

const controlador = {
    index: (req,res)=>{
        res.render("index")
    },
    secciones: (req, res)=>{
        res.render("secciones")
    },
    tarjeta: (req, res)=>{
        res.render("tarjeta")
    },
    registro: (req, res)=>{
        res.render("registro")
    },
    postregistro: /*(req, res)=>{
        const datos = req.body;

        let nombre = datos.nombre;
        let contraseña = datos.password;
        let email = datos.email;
        let edad = datos.edad;
        let desc = datos.desc;
        let imagen = datos.imagen;

        let registrar = "INSERT INTO usuarios (nombre, password, email, edad, descripcion, imagen) VALUES (' "+nombre+" ', ' "+contraseña+" ', ' "+email+" ', ' "+edad+" ', ' "+desc+" ', ' "+imagen+" ')"

       conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("datoz almacenadoz correctamente")
            res.redirect("/secciones"); 
        }})
*/
 (req, res) => {
     let errors = validationResult(req);

     if (errors.isEmpty()){
        let hashedPassword = bcrypt.hashSync(req.body.password, 10);

            const datos = req.body;

        let nombre = datos.nombre;
        let contraseña = /*datos.password*/ hashedPassword;
        let email = datos.email;
        let edad = datos.edad;
        let desc = datos.desc;
        let imagen = datos.imagen;

        let registrar = "INSERT INTO usuarios (nombre, password, email, edad, descripcion, imagen) VALUES (' "+nombre+" ', ' "+contraseña+" ', ' "+email+" ', ' "+edad+" ', ' "+desc+" ', ' "+imagen+" ')"

       conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("datoz almacenadoz correctamente")
            res.redirect("/secciones"); 
        }})
        
     } else {
        res.render("registro", { 
        errors: errors.array(),
        old: req.body
    });
    }},
    inicioSesion: (req, res)=>{
        res.render("inicioSesion")
    },
    lista: (req, res)=>{
        res.render("usuarios/listaUsuarios")
    }

}

module.exports = controlador;