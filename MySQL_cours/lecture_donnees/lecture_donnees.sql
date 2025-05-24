
/*
    - SOURCE : permet de lire les données d'un autre fichier sql
        Ex : SOURCE C:\lien\vers\mon_fichier.sql


    - SELECT : Permet de rechercher des données dans une base de données
        - SELECT <colonnes> FROM <table> : permet de recuperer des donnees d'une table (* = toutes les colonnes)
        - SELECT DINSTINCT <colonnes> FROM <table> : permet de recuperer des donnees distinctes d'une table 
*/

SELECT product_name FROM fv_products;