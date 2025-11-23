var quizModel = require("../models/quizModel");

function quizFeitcos(req, res) {

    var porcentagem = req.body.porcentagemFinalDeAcertosServer;
    var pontuacao = req.body.pontuacaoFinalServer;
    var idusuario = req.body.id_usuarioServer;
    
    console.log(`Tentando salvar resultado do quiz...`);

    quizModel.quizFeitcos(porcentagem, pontuacao, idusuario)
        .then(
            function (resultado) {
                    res.status(201).send({ message: "Resultado do quiz registrado com sucesso!" });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar as ultimas grafico.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
}

module.exports = {
    quizFeitcos,

}