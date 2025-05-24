


"""
Methode           : Fonction sur une instance ( Objet.)
Methode de classe : Fonction sur une classe 
Methode statique  : Fonction indépendante mais " lié " à une classe 

"""

class Humain:

    lieu_habitation= "Terre"

    def changer_planete(cls, nouvelle_planete):         # Cls = Methode de classe 
        Humain.lieu_habitation= nouvelle_planete
    changer_planete= classmethod(changer_planete)

    def Verite_fondamental():
        print("l' humain est consideré comme l'etre le plus intelligent sur terre... ")
    Verite_fondamental = staticmethod(Verite_fondamental)


# Programme prinipal

print("planete actuelle : {}".format(Humain.lieu_habitation))
Humain.changer_planete("Mars")

print("Novelle planete : {}".format(Humain.lieu_habitation)) 
Humain.Verite_fondamental()


        