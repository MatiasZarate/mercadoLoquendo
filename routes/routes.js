const homeController = require('./../controllers/homeController');
const express = require("express");
const router = express.Router();



const {check} = require('express-validator');

const validateRegister = [
    check("nombre").notEmpty().withMessage("debes completar el nombre de usuario"),
    check("password").notEmpty().withMessage("debes completar la contraseña"),
    check("email").notEmpty() .withMessage("debes completar el campo con un email"),
    check("edad").notEmpty().withMessage("debes completar el campo edad")
];

router.get("/", homeController.index);
router.get("/secciones", homeController.secciones);
router.get("/tarjeta", homeController.tarjeta);
router.get("/registro", homeController.registro);
router.post("/registro", validateRegister, homeController.postregistro);
router.get("/inicioSesion", homeController.inicioSesion);
router.get("/listaUsuarios", homeController.lista);

module.exports = router;