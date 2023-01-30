const { modelEmpresa } = require("../../models");

module.exports = {
    listEmpresa: async(req, res) => {
        try{
            const listingEmpresa = await modelEmpresa.findAll();
            res.status(200).json(listingEmpresa);
        }catch (error) {
            res.status(500).json("Ocorreu um erro" + error)
        }
    },

    async addEmpresa(req, res) {
        try {
            const { 
                razaosocial, cnpj, cep, cidade, bairro, complemento
             } = req.body

             const addingEmpresa = await modelEmpresa.create({
                razaosocial, cnpj, cep, cidade, bairro, complemento
             });

             res.status(201).json(addingEmpresa);
        } catch (error) {
            res.status(500).json("Ocorreu um erro", + error)
        }
    },

    async editEmpresa(req, res) {
        try {
            const { id } = req.params;
            const { razaosocial, cnpj, cep, cidade, bairro, complemento } = req.body;

            const editingEmpresa = await modelEmpresa.update({
                razaosocial, cnpj, cep, cidade, bairro, complemento
            },{
                where: {
                    id
                }
            }
            );
            res.status(200).json("Empresa atualizada com sucesso!")
        } catch (error) {
            res.status(500).json("Ocorreu um erro", + error)
        }
    },

    async delEmpresa(req, res) {

            const { id } = req.params

            const empresa = await modelEmpresa.findOne({ where: { id }})
            if (!empresa) {
                res.status(401).json({ message: "Empresa nao encontrada"})
            } else {
                await modelEmpresa.destroy({ where: { id }})
                res.status(200).json({ ok: true})
            }
           
    
    }
}