const modelLicenca = require("./licenca/licencaModel");
const modelEmpresa = require("./empresa/empresaModel");

modelLicenca.belongsTo(modelEmpresa, {
    foreignKey: "id"
});

modelEmpresa.hasMany(modelLicenca, {
    foreignKey: "id"
});

module.exports = {
    modelLicenca, modelEmpresa
}