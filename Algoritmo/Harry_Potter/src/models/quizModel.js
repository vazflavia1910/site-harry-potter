var database = require("../database/config");

function quizFeiticos(idusuario, pontuacao) {
    
    var instrucaoSql = `
        INSERT INTO resultado (fk_usuario, fk_quiz, resultado) 
        VALUES (${idusuario}, 1, ${pontuacao});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    quizFeiticos
}