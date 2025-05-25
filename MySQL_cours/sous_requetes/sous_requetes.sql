
/*
    - Les sous requetes permettent d'executer des requetes dans des requetes. (imbriquer des requetes)
        Ex : Verifier si un joueur a vendu un item
            SELECT * FROM fv_players
            WHERE player_name = (
                SELECT playertrade_seller 
                FROM fv_playertrades
                WHERE playertrade_seller = 'Icekissy'
                LIMIT 1
            );
            En mettant 'IN' a la place de '=' cela va retourner une liste

*/

SELECT * FROM fv_players
WHERE player_name = (
    SELECT playertrade_seller 
    FROM fv_playertrades
    WHERE playertrade_seller = 'Nephion'
    LIMIT 1
);

SELECT * FROM fv_players
WHERE player_name = ANY (
    SELECT playertrade_seller
    FROM fv_playertrades 
    WHERE playertrade_item = 'Epée en mousse'
);

SELECT * FROM fv_players
WHERE EXISTS (
    SELECT *
    FROM fv_playertrades 
    WHERE playertrade_item = 'Epée en mousse'
) AND player_level > 15
ORDER BY player_level DESC;