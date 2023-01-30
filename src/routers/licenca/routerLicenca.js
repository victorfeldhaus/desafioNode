const express = require("express");
const routerLicenca = express.Router();


const controllerLicenca = require("../../controllers/licenca/controllerLicenca")

routerLicenca.get("/licencas", 
    controllerLicenca.listLicenca
);

routerLicenca.post("/licenca/insert", 
controllerLicenca.addLicenca);

routerLicenca.put("/licenca/update/:id", 
controllerLicenca.editLicenca)

routerLicenca.delete("/licenca/delete/:id", 
controllerLicenca.delLicenca)


module.exports = routerLicenca;