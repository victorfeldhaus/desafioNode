const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_CONFIG = {
    dialect: "mysql", port: process.env.DB_CONFIG_PORT, host: process.env.DB_CONFIG_HOST,
    define: {
        timestamps: false,
    }
};


let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
}catch(error) {
    console.error("Erro na conexão com o banco de dados!" + error);
}

async function Connection() { 
    try {
        await db.authenticate();
        console.log("A conexão com o banco de dados foi um sucesso!")
    }catch(error) {
        console.log("Erro na conexão com o banco de dados!" + error)
    }
}


Object.assign(db, {
    Connection
});

module.exports = db;


