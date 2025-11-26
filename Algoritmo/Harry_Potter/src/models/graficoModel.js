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

function buscarAnimais() {


    var instrucaoSql = `
        SELECT
            count(CASE WHEN animal = 'coruja' THEN 1 ELSE NULL END) AS corujas,
            count(CASE WHEN animal = 'gato' THEN 1 ELSE NULL END) AS gatos,
            count(CASE WHEN animal = 'sapo' THEN 1 ELSE NULL END) AS sapos
        FROM usuario;
    `;

    return database.executar(instrucaoSql);
}

function buscarAnimal(id_usuario) {


    var instrucaoSql = `
    select animal from usuario
	where id_usuario = ${id_usuario}`;

    return database.executar(instrucaoSql);
}

function buscarPontos(id_usuario) {


    var instrucaoSql = `
    select 
		r.resultado 
        from resultado r join usuario u
        on r.fk_usuario = u.id_usuario
        where u.id_usuario = ${id_usuario};`;

    return database.executar(instrucaoSql);
}


module.exports = {
    graficoIdade,
    buscarAnimais,
    buscarAnimal,
    buscarPontos
}