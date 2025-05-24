
"""
Menu(widget_parent) : creer un menu principal
    tearoff=0       : enlever une sorte de separation entre le menu et le sous menu 

.add_command()      : Elle sert à ajouter une option à un menu existant.
    label
    quit            : quitter
.add_cascade()      : ajouter un sous-menu à un menu existant. 
    label
    menu            : quel sous-menu associer à un label . 
.add_separator      : crée un separateur
 
"""

#add_checkbutton()
#add_radiobutton()
#add_separator() :  ajoute un trait de separation


#creation d'une sous fenetre
def new_fenetre():
    seconde_fenetre = Toplevel(app)
    seconde_fenetre.title("salut")
    seconde_fenetre.geometry("300x250")

    lb = Label(seconde_fenetre, text="bonjour")
    lb.pack()

# le module
from tkinter import *
#parametre fenetre
app= Tk()
app.title("création menu")
app.geometry("580x420")
#widgets...
    
    #Menu principal
mainmenu = Menu(app)

    #création des sous menus
menu1= Menu(mainmenu, tearoff=0)
menu2 = Menu(mainmenu, tearoff=0)

    #Ajout d'options aux sous-menus:
menu1.add_command(label="option1")
menu1.add_command(label="option2")
menu1.add_separator() 
menu1.add_command(label="quitter", command=app.quit)

menu2.add_command(label="commande1")
menu2.add_command(label="salutation",command=new_fenetre)

    #Ajout des sous-menus au menu principal:
mainmenu.add_cascade(label="premier", menu=menu1)
mainmenu.add_cascade(label="second", menu=menu2)

#boucle principale
app.config(menu= mainmenu) # Configure la fenêtre principale pour utiliser le menu mainmenu comme barre de menu.
app.mainloop()

