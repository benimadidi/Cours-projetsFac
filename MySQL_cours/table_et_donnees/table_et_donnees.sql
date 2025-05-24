/*
-- Commentaire sur une seule ligne 
# commentaire sur une seule ligne

    - Mettre les différents type de nommage entre `` pour éviter les erreurs 

    - Requête sur les bases de données
        - SHOW DATABASES : permet de lister les bases de données
        - CREATE DATABASE <nom> : permet de créer une base de données
        - CREATE DATABASE IF NOT EXISTS <nom> : permet de créer une base de données si elle n'existe pas déjà
        - DROP DATABASE <nom> : permet de supprimer une base de données
        - USE <nom> : permet de sélectionner une base de données pour l'utiliser

    - Requête liées aux tables
        - SHOW TABLES : permet de lister les tables d'une base de données
        - SHOW TABLES FROM <nom_base> : permet de lister les tables d'une base de données
        - CREATE TABLE <nom> : permet de créer une table
        - CREATE TABLE IF NOT EXISTS <nom> : permet de créer une table si elle n'existe pas déjà
            - Forme : 
                CREATE TABLE <nom> (
                    <nom_colonne_1> <type_colonne_1>,
                    <nom_colonne_2> <type_colonne_2>,
                    ...
                );
        - DESCRIBE <nom_table> : permet de lister les colonnes d'une table | EXPLAIN <nom_table> 
        - ALTER TABLE <nom_table> : permet de modifier une table
            - ADD <nom_colonne> <type_colonne> : permet d'ajouter une colonne
            - DROP <nom_colonne> : permet de supprimer une colonne
            - MODIFY <nom_colonne> <type_colonne> : permet de modifier le type d'une colonne
            - CHANGE <nom_colonne_1> <nom_colonne_2> et/ou <type_colonne_2> : permet de modifier le nom et/ou le type d'une colonne
        - DROP TABLE <nom_table> : permet de supprimer une table

        SHOW TABLE STATUS : permet de voir le statut des tables
    
*/

--Requête sur les bases de données
SHOW DATABASES; 
CREATE DATABASE IF NOT EXISTS `test`;
USE `test`;
 
-- Requête sur les tables
SHOW TABLES;

CREATE TABLE IF NOT EXISTS `t_users`(
    `id_user` INT,
    `user_name` VARCHAR(70),
    `user_birthday` DATE
);

DESCRIBE `t_users`;
SHOW TABLE STATUS;

DROP TABLE `t_users`;
