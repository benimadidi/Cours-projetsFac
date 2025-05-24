
"""
 Class Humain                    : Cette ligne définit une nouvelle classe appelée Humain. 
                                 : Une classe est comme un plan qui sert à créer des objets (ici, des "humains").

 __init__(self, c_prenom, c_age) :  C'est une méthode spéciale appelée "constructeur". 
                                    Elle s'exécute automatiquement lorsqu'on crée un nouvel objet de la classe Humain. 
                                    Les paramètres c_prenom et c_age permettent de donner un prénom et un âge à l'humain que l'on crée.  
"""

class Humain:     

    def __init__(self, c_prenom, c_age):      
        print("créaton d'un humain...")
        self.prenom = c_prenom
        self.age= c_age
        

print("lancement du programme...")
print("")

h1= Humain("abel", 25)
print("prénom de h1 : {}".format(h1.prenom))
print("age de h1 : {} ans".format(h1.age ))

h1= Humain("toussaint", 17)
print("prénom de h1 : {}".format(h1.prenom))
print("prénom de h1 : {} ans".format(h1.age))


# COMPRENDRE LES ATTRIBUTS

class Voiture : 
    def __init__(self, marque, modele, couleur) : 
        self.marque = marque
        self.modele = modele
        self.couleur = couleur

ma_voiture= Voiture("toyota", "corolla", "verte")
print("la marque de ma voiture est {} et elle est de couleur {}".format(ma_voiture.marque, ma_voiture.couleur))
