
/*
    - INNER JOIN : Permet de combiner des lignes de deux tables en fonction d'une condition de jointure.
        - Syntaxe :
        SELECT column1, column2, ...
        FROM table1
        INNER JOIN table2
        ON table1.column1 = table2.column2;
    
    - LEFT JOIN : Retourne toutes les lignes de la table de gauche et les lignes correspondantes de la table de droite.
        - Syntaxe :
        SELECT column1, column2, ...
        FROM table1
        LEFT JOIN table2
        ON table1.column1 = table2.column2;
        - On peut ajouter une condition WHERE pour filtrer les résultats.
*/

SELECT player_name, player_level, ability_name
FROM fv_players
INNER JOIN fv_abilities ON fv_players.player_ability = fv_abilities.id_ability;

SELECT *
FROM fv_abilities
LEFT JOIN fv_players 
ON fv_players.player_ability = fv_abilities.id_ability
WHERE fv_players.player_ability IS NULL;