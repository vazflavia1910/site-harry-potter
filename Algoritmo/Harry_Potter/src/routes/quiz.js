var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/quizFeitcos", function (req, res) {
    quizController.quizFeitcos(req, res);
})
module.exports = router;