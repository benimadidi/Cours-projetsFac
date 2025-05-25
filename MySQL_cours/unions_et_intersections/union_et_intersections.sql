
/*
    - UNION : permet de fusionner deux groupes de données des differentes tables 
        Ex : SELECT * FROM table1 UNION SELECT * FROM table2
        (!) Pour que UNION marche il faut : 
            - que les colonnes soient de la meme taille
            - qu'ils aient le meme ordre
            - que les colonnes soient du meme type
        - Il ne recupere pas les doublons 
            On peut tout recuperer avec UNION ALL

    - INTERSECT : Retourne les doublons de deux groupes de données des differentes tables 
        Ex : SELECT * FROM table1 INTERSECT SELECT * FROM table2

    - MINUS : Retourne les donnees de la premiere table qui ne sont pas dans la deuxieme (propre a oracle)
        Ex : SELECT * FROM table1 MINUS SELECT * FROM table2
    - EXCEPT : Retourne les donnees de la premiere table qui ne sont pas dans la deuxieme 
        Ex : SELECT * FROM table1 EXCEPT SELECT * FROM table2
*/

SELECT * FROM fv_site1_users
UNION
SELECT * FROM fv_site2_users;

SELECT user_name FROM fv_site1_users
UNION
SELECT user_name FROM fv_site2_users;

SELECT user_name FROM fv_site1_users
UNION ALL
SELECT user_name FROM fv_site2_users;

SELECT user_name FROM fv_site1_users
INTERSECT
SELECT user_name FROM fv_site2_users;

SELECT user_name FROM fv_site1_users
EXCEPT
SELECT user_name FROM fv_site2_users;