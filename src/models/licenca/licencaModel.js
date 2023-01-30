const db = require("../../databases");
const { DataTypes } = require("sequelize");


const modelEmpresa = require("../empresa/empresaModel")


module.exports = db.define("licenca", {
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,
        field: "id"
    },
    empresas: {
        type: DataTypes.INTEGER, field: "empresas", 
        references: {
            model: modelEmpresa,
            key: "id"
        }
    },
    numero: {
        type: DataTypes.STRING, field: "numero"
    },
    orgaoambiental: {
        type: DataTypes.STRING, field: "orgaoambiental"
    },
    emissao: {
        type: DataTypes.DATE, field: "emissao"
    },
    validade: {
        type: DataTypes.DATE,  field: "validade"

    },
}, {
    tableName: "licenca"
});