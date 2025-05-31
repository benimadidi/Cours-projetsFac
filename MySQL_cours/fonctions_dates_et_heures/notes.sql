
/*
    Il existe des structure de temps formatées enc chaine de caractères :
        - %Y : Année sur 4 chiffres
        - %y : Année sur 2 chiffres
        - %m : Mois sur 2 chiffres (01-12)
        - %d : Jour du mois sur 2 chiffres (01-31)
        - %H : Heure sur 2 chiffres (00-23)
        - %i : Minutes sur 2 chiffres (00-59)
        - %S : 
        - %p : AM ou PM (en anglais)

        - %a : Jour de la semaine abrégé (Mon, Tue, Wed, ...)
        - %A : Jour de la semaine complet (Monday, Tuesday, Wednesday, ...)
        - %b : Mois abrégé (Jan, Feb, Mar, ...)
        - %B : Mois complet (January, February, March, ...)

    - Fonctions : 
        - DATEDIFF(date1, date2) : Retourne la différence entre deux dates.
        - DATE_FORMAT(date, format) : Formate une date selon le format spécifié.

*/

SELECT  DATE_FORMAT(NOW(), 'Le %d/%m/%Y à %H:%i:%S');