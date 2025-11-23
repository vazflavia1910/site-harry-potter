var database = require("../database/config");

function quizFeitcos(porcentagem, pontuacao, idusuario) {
    
    var instrucaoSql = `
        INSERT INTO resultado (fk_usuario, pontuacao, porcentagem_acertos, dt_realizado) 
        VALUES (${idusuario}, ${pontuacao}, ${porcentagem}, NOW());
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    quizFeitcos,
}