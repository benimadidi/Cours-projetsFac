
/*
    - WHERE : Permet de filtrer les données selon une condition
        - WHERE <condition> : permet de filtrer les données selon une condition    
        <condition> : permet de filtrer les données selon une condition
            - opérateurs de comparaison (=, !=, <, >, <=, >=)
        - AND : filtrer les conditions avec AND
        - OR : filtrer les conditions avec OR
        - IN(<valeur(s)) : filtre les donnees qui correspondent aux valeurs specifiees
        - BETWEEEN <fourchette> : permet de filtrer les donnees selon une fourchette de valeur
        - LIKE : permet de filtrer les donnees selon un mot ou une phrase
            Ex : SELECT * FROM fv_games WHERE game_title LIKE  '%<mot ou phrase>%'
                % : Choisi n'importe quel phrase du moment ou elle trouve le mot ou la phrase
                _ : Ne choisi que le mot ou la phrase entier
        - IS NULL : permet de filtrer les donnees qui sont null
        - IS NOT NULL : permet de filtrer les donnees qui sont pas null

        Ex : SELECT * FROM <table> WHERE <condition>;
            <condition : game_price > 0 AND game_price < 50

    - ORDER BY : Permet de trier les données selon une colonne
        - ORDER BY <colonne> : permet de trier les données selon une colonne
        - ORDER BY <colonne> DESC : permet de trier les données selon une colonne en ordre decroissant

    - LIMIT : Permet de limiter le nombre de données affiché
        - LIMIT <nombre> OFFSET <nombre> : permet de limiter le nombre de données affiché en ajoutant un decalage 
        - Propre a mysql : SELECT FROM <table> LIMIT <offset>, <limit> 
*/
SHOW DATABASES;
USE fv_database;


SELECT * FROM fv_games WHERE game_price > 0 AND game_price < 50;
SELECT * FROM fv_games WHERE game_stock BETWEEN 1 AND 50;

SELECT * FROM fv_games WHERE game_title LIKE 'Pokémon%';

SELECT * FROM fv_games ORDER BY game_tiltle ;
SELECT * FROM fv_games ORDER BY game_tiltle DESC;

SELECT * FROM fv_games LIMIT 5;
SELECT * FROM fv_games LIMIT 5 OFFSET 2;

