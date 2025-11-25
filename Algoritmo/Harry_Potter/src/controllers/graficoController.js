var graficoModel = require("../models/graficoModel");

function graficoIdade(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    graficoModel.graficoIdade().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas grafico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarAnimais(req, res) {
    graficoModel.buscarAnimais().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas grafico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarpontos(req, res) {
    var id_usuario =  req.body.idUsuarioServer;

    graficoModel.buscarpontos(id_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas grafico.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    graficoIdade,
    buscarAnimais,
    buscarpontos
}