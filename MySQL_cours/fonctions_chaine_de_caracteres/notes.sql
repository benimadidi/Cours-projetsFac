
/*
    - Les différentes fonctions de chaînes de caractères :
        - CONCAT(<chaîne1>, <chaîne2>) : concatène des chaînes de caractères
        - REPLACE(<chaîne>, <recherche>, <remplacement>) : remplace une partie d'une chaîne de caractères
            Ex : REPLACE('Bonjour', 'jour', 'soir') => 'Bonsoir'
        
*/

SELECT carbrand_name, CONCAT( carbrand_name, "(", carbrand_country, ")" ) AS "Marque(pays)"
FROM fv_carbrands;

UPDATE fv_carbrands
SET carbrand_website = REPLACE(carbrand_website, 'group', 'groupe')
WHERE carbrand_name = 'Renault';
SELECT carbrand_name, carbrand_website
FROM fv_carbrands;
