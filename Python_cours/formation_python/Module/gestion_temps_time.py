# 1er janvier 1970 à 00h00
"""
sleep(seconde) : permet de suspendre un programme
time()         : le nombre de seconde qui s'est écoulé depuis le 1er janvier 1970
localtime()    : permet d'obtenir une structure de temps
mktime()       : permet de convertir la structure de temps en pour revenir au timestamp
strftime()     : formater une struct time en une chaine de caractere lisible
    %d         : jour(01 à 31)
    %m         : mois(01 à 12 )
    %Y         : Année(ex : 2024) / %y (00 à 99)
    %H         : heures(00 à 23)
    %I         : minutes(00 à 59)
    %S         : seconde (00 à 59)
    %p         : AM/PM

    %A         : jour semaine / %a (jour abregé)
    %B         : mois / %b (mois abregé)

    %Z         : Fuseau horaire(timezone)

             localtime()
(TIMESTAMP) -------------> structure de temps
            <-------------
              mktime()
"""
import time

# Definir le locale sur francais
import locale
locale.setlocale(locale.LC_TIME, "fr_FR")

print(time.strftime("%d"))
