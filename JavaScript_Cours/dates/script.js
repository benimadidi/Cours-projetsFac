/*
Declaration de dates :
    Date() : Objet Date
    new Date() : Constructeur

    Forme : - "mois jour, année heure:minute:seconde"
            - annee, mois, jour, heure, minute, seconde
    
Date :
    .now() : Recupere le nbr de milli-seconde depuis le timestamp

new Date() :
    d.getTime() : Recupere le timestamp
    d.getDay() : Recupere le jour de la semaine
    d.getDate() : Recupere le jour
    d.getMonth() : Recupere le mois
    d.getFullYear() : Recupere l'annee
    d.getHours() : Recupere l'heure
    d.getMinutes() : Recupere les minutes
    d.getSeconds() : Recupere les secondes
    () => peuvent avoir le format UTC

    d.setDate() : Permet de modifier le jour
    d.setMonth() : Permet de modifier le mois
    d.setFullYear() : Permet de modifier l'annee
    d.setHours() : Permet de modifier l'heure
    d.setMinutes() : Permet de modifier les minutes
    d.setSeconds() : Permet de modifier les secondes
*/

let date = new Date();

document.writeln(`<p> ${date.getFullYear()} </p>`);

date.setFullYear(2021)

document.writeln(`<p> ${date.getFullYear()} </p>`);

