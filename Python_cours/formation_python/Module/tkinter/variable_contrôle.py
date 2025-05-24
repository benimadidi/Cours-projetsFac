
#<nom_variable> = <nom_widget> (<widget_parent>, <params>,...)

from tkinter import * 

"""
StringVar()              : chaîne de caractère [str]
IntVar()                 : nombre entier [int]
DoubleVar()              : nombre flottant [float]
BooleanVar()             :  booléen [bool] 

label()                  : Afficher du texte dans la fenêtre
   textvariable          : lié une variable python  
    

trace("mode",F d'appel ) : utilisée pour enregistrer une fonction de rappel (callback) 
                           qui sera appelée chaque fois qu'une modification survient sur la variable.
   "w"                   : déclenche la fonction de rappel à chaque écriture dans la variable.
   "r"                   : déclenche la fonction de rappel à chaque lecture de la variable.
   "u"                   : supprime un traceur précédemment enregistré.
     
"""

"""
set() : fixer une nouvelle valeur 
get() : obtenir la valeur
"""


# Observateur
def update_label(*args) : 
   var_label.set(var_entry.get())

# Création et paramétrage de la fenêtre 
app = Tk()
app.geometry("400x300")
app.title("Variables tkinter")

#Widgets ...
var_entry = StringVar()
var_entry.trace("w", update_label)
entry = Entry(app, textvariable= var_entry)

var_label = StringVar()
label = Label(app, textvariable=var_label)

entry.pack()
label.pack()
# Boucle principale
app.mainloop()



# Observateur
def update_observeur(*args) : 
   if var_gender.get() :
      var_label_gender.set("c'est un homme")
      print("c'est un homme")
   else :
      var_label_gender.set("c'est une femme")
      print("c'est une femme")
# Création et paramétrage de la fenêtre 
app = Tk()
app.geometry("400x300")
app.title("Variables tkinter")

#Widgets ...
var_gender = IntVar()
var_gender.trace("w", update_observeur)

radio = Radiobutton(app, text="Homme", value=1, variable=var_gender)
radio2 = Radiobutton(app, text="Femme", value=0, variable=var_gender)

var_label_gender = StringVar()
var_label = Label(app,textvariable=var_label_gender)

radio.pack()
radio2.pack()
var_label.pack()
# Boucle principale
app.mainloop()