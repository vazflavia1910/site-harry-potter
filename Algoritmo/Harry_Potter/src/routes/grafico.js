var express = require("express");
// caminho para acessar os arquivos
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/graficoIdade", function (req, res) {
    graficoController.graficoIdade(req, res);
});

router.get('/buscarAnimais', function (req, res) {
    graficoController.buscarAnimais(req, res);
})

router.post('/buscarAnimal', function (req, res) {
    graficoController.buscarAnimal(req, res);
})

router.post('/buscarPontos', function (req, res) {
    graficoController.buscarPontos(req, res);
})

module.exports = router;