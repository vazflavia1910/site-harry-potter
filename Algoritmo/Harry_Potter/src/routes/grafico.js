var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/graficoIdade", function (req, res) {
    graficoController.graficoIdade(req, res);
});

module.exports = router;