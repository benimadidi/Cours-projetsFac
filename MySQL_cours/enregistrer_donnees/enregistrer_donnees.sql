
/*
    - INSERT INTO <nom_table> (<nom_colonne_1>, <nom_colonne_2>, ...) 
      VALUES (<valeur1>, <valeur2>, ...) : permet d'inserer plusieurs valeurs dans une table

    - INSERT INTO <nom_table> (<nom_colonne_1>, <nom_colonne_2>, ...) 
      VALUES (<valeur1>, <valeur2>, ...),
             (<valeur1>, <valeur2>, ...),
             ...                           : permet d'inserer plusieurs valeurs sur plusieurs lignes en une seule fois
*/

INSERT INTO `fv_clients` (`client_firstname`, `client_lastname`, `client_birthday`, `client_loyalty`)
VALUES ('Toussaint', 'MADIDI', '2007-03-28', 15),
       ('Toussaint', 'MADIDI', '2007-03-28', 15),
       ('Toussaint', 'MADIDI', '2007-03-28', 15),
       ('Toussaint', 'MADIDI', '2007-03-28', 15),
       ('Toussaint', 'MADIDI', '2007-03-28', 15);