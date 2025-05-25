
/*
    - GROUP BY : permet de regrouper les données selon une colonne
        Ex : SELECT <colonne>, <fonction> 
             FROM <table> 
             GROUP BY <colonne> WITH ROLLUP;
                WITH ROLLUP fait une sortie par groupe, et une sortie par groupe + total

    - HAVING : permet de filtrer les données selon une condition avec le groupement des données
        Ex : SELECT <colonne>, <fonction> 
             FROM <table> 
             GROUP BY <colonne> 
             HAVING <condition>
*/
 
SELECT  user_country, COUNT(*)
FROM fv_users
GROUP BY user_country;

SELECT user_country, SUM(user_age)
FROM fv_users
GROUP BY user_country WITH ROLLUP;

SELECT user_country, SUM(user_age)
FROM fv_users
GROUP BY user_country 
HAVING SUM(user_age) > 30;
