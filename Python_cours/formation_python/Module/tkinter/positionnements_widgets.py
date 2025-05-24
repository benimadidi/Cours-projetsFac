
"""
frame()               : créer un cadre

pack()                : positionnement widgets. (!) Initialise la position des widgets au dessus

    side              : specifier la position d'un widget
        side="top"    : en haut
        side="right"  : à droite
        side="left"   : à gauche
        side="bottom" : en bas

    expand            : etendre le widget dans les espaces vide       (!)booleen.
        expand=False or 0
        expand=True or 1

    fill              : spécifie dans quelle direction le widget doit s'étendre 
        fill="x"      : etendre le widget horizontalement
        fill="y"      : etendre le widget verticalement
        fill="both"   : etendre le widget horizontalement et verticalement

    marges externes 
        padx , pady
    marges internes
        ipadx , ipady

grid()                : positionnement widget sous forme de ligne et de colonne
    row =             : ligne
    colomn =          : colonne
    colomnspan=       : gerer la dimension qu'occupe un widget (ex : 2 colonnes) 
    rowspan=          : gerer la dimension qu'occupe un widget (ex : 2 lignes) 

    sticky
    n , s , e , w

place()              : positionner un widget au pixel près
    x= , y=
"""

from tkinter import *

# parametre fenetre
app = Tk()
app.title("positionnements widgets")
app.geometry("640x480")
app.config(bg="black")


# widgets

btn = Button(app, text= "BIENVENUE", bg= "green" )

btn.place(x= 500, y=120)

#boucle prinipale
app.mainloop()