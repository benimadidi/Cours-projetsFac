""""
Tk()                             : est une fonction qui crée un objet de type fenêtre. 

mainapp.title("")                : donner un titre à la fenêtre
mainapp.mainloop                 : Cette ligne démarre la boucle principale de l'application;
mainapp.minsize ()               : definir une taille min
mainapp.maxsize ()               : definir une taille max
mainapp.resizable()              : permettre ou non la persoonnalisation de la taille de la fenêtre
    width = largeur
    height = hauteur

mainapp.winfo_screenwidth()      :
                                  } recupère la resolution de l'ecran
mainapp.winfo_screenheight()     : 

"""

from tkinter import *



mainapp = Tk()
mainapp.title("mon premier programme fenêtré")
mainapp.config(bg = "black")
#mainapp.minsize(640, 480)
#mainapp.maxsize(980, 620)
#mainapp.positionfrom("user")
#mainapp.sizefrom("user")
#mainapp.resizable(width= False, height= False)

#geometry(XxY+0+0)
mainapp.geometry("700x400+30+30")

screen_X = int(mainapp.winfo_screenwidth())
screen_Y = int(mainapp.winfo_screenheight())
window_X = 600
window_Y = 480

posX = (screen_X // 2) - (window_X // 2)
posY = (screen_Y // 2) - (window_Y // 2)

geo  = "{}x{}+{}+{}".format(window_X, window_Y,posX, posY )
mainapp.geometry(geo)


mainapp.mainloop()

