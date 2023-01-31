const { modelLicenca, modelEmpresa } = require("../../models");

module.exports = {
    listLicenca: async(req, res) => {
        try {
            const listingLicenca = await modelLicenca.findAll({
                include: modelEmpresa
            });
            res.status(200).json(listingLicenca);
        } catch (error) {
            res.status(500).json("Ocorreu um erro", + error)
        }
    },

    async addLicenca(req, res) {
        try {
            const { 
                empresas, numero, orgaoambiental, emissao, validade
             } = req.body

             const addingLicenca = await modelLicenca.create({
                empresas, numero, orgaoambiental, emissao, validade
             });

             res.status(201).json(addingLicenca);
        } catch (error) {
            res.status(500).json("Ocorreu um erro", + error)
        }
    },

    async editLicenca(req, res) {
        try {
            const { id } = req.params;
            const { empresas, numero, orgaoambiental, emissao, validade } = req.body;

            const editingLicenca = await modelLicenca.update({
                empresas, numero, orgaoambiental, emissao, validade
            },{
                where: {
                    id
                }
            }
            );
            res.status(200).json("Licença atualizada com sucesso!")
        } catch (error) {
            res.status(500).json("Ocorreu um erro", + error)
        }
    },

    async delLicenca(req, res) {
        
        const { id } = req.params

        const licenca = await modelLicenca.findOne({ where: { id }})
        if (!licenca) {
            res.status(401).json({ message: "Licença nao encontrada"})
        } else {
            await modelLicenca.destroy({ where: { id }})
            res.status(200).json({ message: "Licença Deletada!"})
        }
       

}
}
