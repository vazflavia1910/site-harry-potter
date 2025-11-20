var database = require("../database/config");

function graficoIdade(limite_linhas) {

    var instrucaoSql = `SELECT dt_nasc,
		CASE 
        WHEN TIMESTAMPDIFF(YEAR,dt_nasc, CURDATE()) <=25 THEN 'Menor que 25'
        WHEN TIMESTAMPDIFF(YEAR,dt_nasc, CURDATE()) <=35 THEN 'Menor que 35'
        WHEN TIMESTAMPDIFF(YEAR,dt_nasc, CURDATE()) <=45 THEN 'Menor que 45'
        ELSE 'Maior que 45'
        END AS 'FaixaEtária'
        FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoIdade

}