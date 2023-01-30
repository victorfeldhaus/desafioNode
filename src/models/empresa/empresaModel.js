const db = require("../../databases");
const { DataTypes } = require("sequelize");

module.exports = db.define("empresa", {
    id:{
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,
        field: "id"
    },
    razaosocial:{
        type: DataTypes.STRING, field: "razaosocial"
    },
    cnpj:{
        type: DataTypes.STRING, field: "cnpj"

    },
    cep:{
        type: DataTypes.STRING, field: "cep"

    },
    cidade:{
        type: DataTypes.STRING, field: "cidade"

    },
    bairro:{
        type: DataTypes.STRING, field: "bairro"

    },
    complemento:{
        type: DataTypes.STRING, field: "complemento"

    }
}, {
    tableName: "empresa"
});