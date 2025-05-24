/*
    Un moteur de stockage est un module qui permet de gérer les
    fichiers de données d'une base de données. Il est responsable
    de la façon dont les données sont stockées, organisées et
    récupérées. Chaque moteur de stockage a ses propres caractéristiques
    et fonctionnalités, ce qui peut influencer les performances,
    la sécurité et la fiabilité de la base de données.
    Par exemple, le moteur de stockage InnoDB est connu pour sa
    prise en charge des transactions, des clés étrangères et de la
    récupération après sinistre, tandis que MyISAM est plus léger
    et plus rapide pour les opérations de lecture, mais ne prend
    pas en charge les transactions ni les clés étrangères.
    Il est important de choisir le moteur de stockage approprié
    en fonction des besoins spécifiques de l'application et des
    exigences de performance.

    Les moteurs de stockage disponibles dans MySQL incluent :

        - InnoDB : moteur de stockage par défaut, prend en charge
        les transactions, les clés étrangères et la récupération
        après sinistre. (Transactionnel)

        - MyISAM : moteur de stockage léger, rapide pour les
        opérations de lecture, ne prend pas en charge les
        transactions ni les clés étrangères. (Non transactionnel)
        
        - MEMORY : stocke les données dans la mémoire vive, ce qui
        permet un accès rapide, mais les données sont perdues
        lorsque le serveur est arrêté. (Pas de place sur l'espace disque, tout en RAM)
        

    - SHOW DATABASES : affiche la liste des bases de données dispo sur mySQL
    - SHOW ENGINES : affiche la liste des moteurs de stockage disponibles

    - SET default_storage_engine : permet de définir le moteur de stockage par défaut

        
*/

