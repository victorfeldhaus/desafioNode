const express = require("express");
const router = express.Router();

const routerEmpresa = require("./empresa/routerEmpresa");
const routerLicenca= require("./licenca/routerLicenca");

router.use(
    routerEmpresa, routerLicenca
)


module.exports = router;