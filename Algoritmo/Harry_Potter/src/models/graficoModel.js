var database = require("../database/config");

function graficoIdade(limite_linhas) {

    var instrucaoSql = `SELECT
    CASE 
        WHEN TIMESTAMPDIFF(YEAR, dt_nasc, CURDATE()) <= 25 THEN '0 a 25 anos'
        WHEN TIMESTAMPDIFF(YEAR, dt_nasc, CURDATE()) <= 35 THEN '26 a 35 anos'
        WHEN TIMESTAMPDIFF(YEAR, dt_nasc, CURDATE()) <= 45 THEN '36 a 45 anos'
        ELSE 'Maior que 45'
    END AS 'FaixaEtaria',
    COUNT(id_usuario) AS 'Valor'
FROM 
    usuario
GROUP BY
    FaixaEtaria
    ORDER BY
    FaixaEtaria ASC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoIdade

}

function graficoAnimal(limite_linhas) {

    var instrucaoSql = `SELECT u.nome AS 'Nome',
		r.dt_realizado AS 'Data Feito',
        r.resultado AS 'Resultado do Quiz'
        FROM usuario AS u JOIN resultado AS r
        ON u.id_usuario = r.fk_usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoAnimal

}