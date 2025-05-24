

"""
Propriété : manière de manipler / controler des attributs 
            Principe d'encapsulation
"""



class Humain : 
    def __init__(self, nom, age) :
        print("création d'un humain ...")
        self.nom = nom
        self._age = age



h1 = Humain("toussaint", 17)
