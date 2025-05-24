
/*
    - Les fonctions d'agregat sont des fonctions qui permettent de faire des calculs sur des groupes de données.
        Parmi ces fonctions, il y a :
            - COUNT() : permet de compter le nombre de lignes d'une table
                Ex : SELECT COUNT(*) FROM <nom_table>
            - AVG : permet de calculer la moyenne des valeurs d'une colonne
                Ex : SELECT AVG(<nom_colonne>) FROM <nom_table>
            - MAX : permet de trouver la valeur maximale d'une colonne
                Ex : SELECT MAX(<nom_colonne>) FROM <nom_table>
            - MIN : permet de trouver la valeur minimale d'une colonne
                Ex : SELECT MIN(<nom_colonne>) FROM <nom_table>
        
*/

SELECT COUNT(*) FROM fv_games;
SELECT AVG(game_price) FROM fv_games;
SELECT  MAX(game_price) FROM fv_games;
SELECT MIN(game_price) FROM fv_games;
SELECT SUM(game_stock) FROM fv_games;


