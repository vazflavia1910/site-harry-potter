var express = require("express");
// caminho para acessar os arquivos
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/graficoIdade", function (req, res) {
    graficoController.graficoIdade(req, res);
});

router.get("/graficoAnimal", function (req, res) {
    graficoController.graficoAnimal(req, res);
});

module.exports = router;