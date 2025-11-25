-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE harry_potter;

USE harry_potter;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45),
dt_nasc DATE,
email VARCHAR(45) unique,
senha VARCHAR(30) unique,
patrono VARCHAR(45),
animal VARCHAR(30),
CONSTRAINT chkAnimal CHECK(animal IN('Coruja', 'Gato', 'Sapo'))
);

CREATE TABLE quiz (
id_quiz INT PRIMARY KEY AUTO_INCREMENT,
nome_usuario VARCHAR (45)
);

CREATE TABLE resultado (
fk_usuario INT,
CONSTRAINT fk_usuario_resultado
	FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id_usuario),
fk_quiz INT ,
CONSTRAINT fk_quiz_usuario
	FOREIGN KEY (fk_quiz)
		REFERENCES quiz(id_quiz),
dt_realizado DATE,
resultado VARCHAR (45) 
);

INSERT INTO usuario (nome, sobrenome, dt_nasc, email, senha, patrono, animal) VALUES
	('Flavia', 'Vaz', '2005-10-19', 'flavia.vaz@gmail.com', 'urubu100', 'corvo', 'Coruja');
    
INSERT INTO quiz (nome_usuario) VALUES
	('Flávia');
   
 INSERT INTO resultado (fk_usuario, fk_quiz, dt_realizado, resultado) VALUES 
	(1, 1, '2025-11-22', 6);
    
SELECT * FROM usuario;
SELECT * FROM resultado;
SELECT * FROM quiz;

SELECT 
    u.animal,
    COUNT(*) AS quantidade
FROM resultado r
JOIN usuario u ON r.fk_usuario = u.id_usuario
GROUP BY u.animal
ORDER BY quantidade DESC;

SELECT u.nome AS 'Nome',
		r.dt_realizado AS 'Data Feito',
        r.resultado AS 'Resultado do Quiz'
        FROM usuario AS u JOIN resultado AS r
        ON u.id_usuario = r.fk_usuario;

delete from usuario
where id_usuario = 19;

SELECT
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
FaixaEtaria ASC;