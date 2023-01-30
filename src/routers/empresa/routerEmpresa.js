const express = require("express");
const routerEmpresa = express.Router();

const controllerEmpresa = require("../../controllers/empresa/controllerEmpresa")

routerEmpresa.get("/empresas", 
controllerEmpresa.listEmpresa);

routerEmpresa.post("/empresa/insert", 
controllerEmpresa.addEmpresa)

routerEmpresa.put("/empresa/update/:id", 
controllerEmpresa.editEmpresa)

routerEmpresa.delete("/empresa/delete/:id", 
controllerEmpresa.delEmpresa)


module.exports = routerEmpresa;