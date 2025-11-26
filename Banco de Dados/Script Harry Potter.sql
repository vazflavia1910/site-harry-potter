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
nome_quiz VARCHAR (45)
);

CREATE TABLE resultado (
id_resultado INT AUTO_INCREMENT,
fk_usuario INT,
fk_quiz INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY (fk_quiz) REFERENCES quiz(id_quiz),
resultado VARCHAR (45),
PRIMARY KEY (id_resultado, fk_usuario, fk_quiz)
);

-- insert de teste
INSERT INTO usuario (nome, sobrenome, dt_nasc, email, senha, patrono, animal) VALUES
	('Flavia', 'Vaz', '2005-10-19', 'flavia.vaz@gmail.com', 'urubu100', 'corvo', 'Coruja');
  
-- insert de teste
INSERT INTO quiz (nome_quiz) VALUES
	('Feitiços');
   
-- insert de teste
 INSERT INTO resultado (fk_usuario, fk_quiz, resultado) VALUES 
	(1, 1, 6);

-- selects padrões    
SELECT * FROM usuario;
SELECT * FROM resultado;
SELECT * FROM quiz;

-- select para pegar os animais 
SELECT 
	count(c.animal) AS corujas, 
	count(g.animal) AS gatos, 
	count(s.animal) AS sapos
FROM (SELECT * FROM usuario WHERE animal = 'coruja') AS c 
JOIN (SELECT * FROM usuario WHERE animal = 'gato') AS g 
JOIN (SELECT * FROM usuario WHERE animal = 'sapo') AS s; 

SELECT
    count(CASE WHEN animal = 'sapo' THEN 1 ELSE NULL END) AS corujas,
    count(CASE WHEN animal = 'gato' THEN 1 ELSE NULL END) AS gatos,
    count(CASE WHEN animal = 'sapo' THEN 1 ELSE NULL END) AS sapos
FROM usuario;

-- selects de teste
SELECT count(animal) AS quantidade FROM usuario where animal = 'coruja';
SELECT count(animal) AS quantidade FROM usuario where animal = 'sapo';
SELECT count(animal) AS quantidade FROM usuario where animal = 'gato';

-- insert de teste
INSERT INTO usuario (nome, sobrenome, email, senha, patrono, animal) VALUE ('J2', '2P', 'jp1234@email.com', '12345', 'lontra', 'coruja');

-- select para faixa etária
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