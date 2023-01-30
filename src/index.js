const express = require("express");
const router = require("./routers");
const dotenv = require("dotenv");
const db = require("./databases")
const app = express();


 
app.use(
    express.json(), router
    )

dotenv.config();
db.Connection();

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT_SERVER} no banco de dados ${process.env.DB_NAME}!`)
});
