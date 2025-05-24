
/*
    Les contraintes sont des conditions qui doivent toujours être respectées lors de la création ou modification d'une table.

    - NOT NULL : La colonne ne peut pas contenir de valeur NULL.
    - DEFAULT <valeur> : Définit une valeur par défaut pour la colonne.
    - CHECK (<condition>) : Vérifie qu'une condition est respectée pour chaque valeur insérée.

    - ADD CONSTRAINT : Permet d'ajouter une contrainte à une table existante.
        Exemple : ALTER TABLE <nom_table> ADD CONSTRAINT <nom_contrainte> CHECK (<condition>);
    - DROP <type_contrainte> <nom_contrainte> : Permet de supprimer une contrainte.
        Exemple : ALTER TABLE <nom_table> DROP CONSTRAINT <nom_contrainte>;

    - UNIQUE(<colonne>) : Garantit que toutes les valeurs d'une colonne sont uniques.
        À placer avant la fin de la définition de la table (comme PRIMARY KEY et FOREIGN KEY).
        Pour supprimer : DROP INDEX <nom_contrainte> ON <nom_table>;

    - PRIMARY KEY (<colonne>) : Définit la clé primaire de la table (identifiant unique, NOT NULL automatiquement).
        À placer à la fin de la définition de la table, comme FOREIGN KEY.

    - AUTO_INCREMENT : Incrémente automatiquement la valeur de la colonne (souvent pour la clé primaire).
        Pour modifier la valeur de départ : ALTER TABLE <nom_table> AUTO_INCREMENT = <valeur>;

    - FOREIGN KEY : Permet de lier une colonne à une colonne d'une autre table (clé étrangère).
        À placer à la fin de la définition de la table, comme PRIMARY KEY.
        Deux formes possibles :
            1. Directement dans la colonne :
                <nom_colonne> <type> REFERENCES <table_cible>(<colonne_cible>)
            2. À la fin de la table :
                FOREIGN KEY (<nom_colonne>) REFERENCES <table_cible>(<colonne_cible>)

    - CREATE INDEX <nom_index> ON <nom_table>(<colonne>) : Crée un index pour accélérer les recherches.
        Pour supprimer : DROP INDEX <nom_index> ON <nom_table>;
*/

SHOW DATABASES;
CREATE DATABASE IF NOT EXISTS `cours_sql`;
USE `cours_sql`;
CREATE TABLE IF NOT EXISTS `table_users`(
    `id_user` SMALLINT(6) NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(30)NOT NULL,
    `user_email` VARCHAR(100) NOT NULL,
    `user_registration` DATE NOT NULL,
    `user_admin` BOOLEAN DEFAULT 0,

    PRIMARY KEY(`id_user`)
);

CREATE TABLE IF NOT EXISTS `table_news`(
    `id_news` SMALLINT(6) NOT NULL AUTO_INCREMENT,
    `news_title` VARCHAR(80) NOT NULL,
    `news_content` TEXT NOT NULL,
    `news_author` SMALLINT(6) NOT NULL,

    PRIMARY KEY(`id_news`),
    FOREIGN KEY(`news_author`) REFERENCES `table_users`(`id_user`)
)
ENGINE = MyISAM  -- Changer le moteur de stockage
CHARACTER SET utf8mb4 -- Changer le jeu de caractères
COLLATE utf8mb4_unicode_ci; -- changer la collation(ordre des caractères)

SHOW TABLE STATUS;
