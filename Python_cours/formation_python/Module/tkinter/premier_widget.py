"""
<nom_variable> = <nom_widget> (<widget_parent>, <params>, ...)

label()                 : Afficher du texte dans la fenêtre

label_welcome.config()  : remplacer du texte
#label_welcome.config(text= "Nouveau message ")

Entry()                 : Saisir dans la fenêtre
    width = changer la taille de l'affichage à l'ecran
    show = masquer un texte par (ex : "*")
    exportselection     : est un paramètre utile pour personnaliser le comportement de copie dans les interfaces graphiques Tkinter.

button() 
    command  = sert à associer une fonction Python à un événement spécifique d'un widget.

"""

def hello() : 
    print("dans le terminal")

from tkinter import *

app = Tk()
app.title("welcome")


button = Button(app, text = "OK ! ", command= hello, width= 20, height= 2)


button.pack()
app.mainloop()
