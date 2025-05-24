
/*
    - Le CRUD est une sigle qui a pour signification :
        - Create : Créer (INSERT TO)
        - Read : Lire (SELECT)
        - Update : Modifier (UPDATE)
        - Delete : Supprimer (DELETE)

    - UPDATE <nom_table> SET <nom_colonne_1> = <valeur_1>, <nom_colonne_2> = <valeur_2>, ... 
      WHERE <condition> : permet de modifier des valeurs dans une table.

    - DELETE FROM <nom_table> WHERE <condition> : permet de supprimer des valeurs dans une table.
    - TRUNCATE TABLE <nom_table> : permet de supprimer toutes les valeurs d'une table
*/

UPDATE fv_games 
SET game_stock = 6, game_price = 11.59 
WHERE id_game = 1;

DELETE FROM fv_games
WHERE id_game = 18;

TRUNCATE TABLE fv_games;