CREATE DATABASE Harry_Potter;

USE Harry_Potter;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
sobrenome VARCHAR (45),
dt_nasc DATE,
email VARCHAR (45),
senha CHAR (8),
patrono VARCHAR (45),
animal VARCHAR (30)
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
fk_quiz INT,
CONSTRAINT fk_quiz_usuario
	FOREIGN KEY (fk_quiz)
		REFERENCES quiz(id_quiz)
);