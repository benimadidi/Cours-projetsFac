
/*
    - SELECT USER FROM MYSQL.USER : Liste tous les utilisateurs
    - SELECT CURRENT_USER() : Permet de connaitre l'utilisateur connecté

    - CREATE USER : Permet de créer un utilisateur 
    - IDENTIFIED BY : Permet de donner un mot de passe au nouvel utilisateur
        - Ex : CREATE USER 'toussaintmdd'@'localhost' IDENTIFIED BY 'toussaintmdd'

        - ALTER USER <nom_utilisateur> IDENTIFIED BY <nouveau_mot_de_passe>: Permet de modifier le mot de passe d'un utilisateur
    - RENAME USER : Permet de renommer un utilisateur
        - Ex : RENAME USER 'toussaintmdd'@'localhost' TO 'benimdd'@'localhost'
    - DROP USER <nom_utilisateur> : Permet de supprimer un utilisateur

    - GRANT : Permet de donner des droits aux utilisateurs
        - GRANT ALL PRIVILEGES ON *.* TO 'toussaintmdd'@'localhost' : Permet de donner tous les droits aux utilisateurs
            - *.* : Selection ce que l'on veut donner aux utilisateurs (* = tout)
            - on peut ajouter WITH GRANT OPTION pour donner des droits a l'utilisateur

    - REVOKE : Permet de retirer des droits aux utilisateurs
        - REVOKE ALL PRIVILEGES ON *.* FROM 'toussaintmdd'@'localhost'
            - *.* : Selection ce que l'on veut retirer aux utilisateurs


*/
SELECT CURRENT_USER();
SELECT USER FROM MYSQL.USER;

CREATE USER IF NOT EXISTS 'toussaintmdd'@'localhost' IDENTIFIED BY 'passe';
ALTER USER 'toussaintmdd@localhost' IDENTIFIED BY 'new';
RENAME USER 'toussaintmdd'@'localhost' TO 'benimdd'@'localhost';
DROP USER 'benimdd'@'localhost';

GRANT ALL
ON cours_sql.*
TO 'toussaintmdd'@'localhost';

REVOKE ALL 
ON cours_sql.*
FROM 'toussaintmdd'@'localhost';