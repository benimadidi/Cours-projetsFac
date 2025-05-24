
"""
Gerer les exceptions : try/except (else/ finally)

Types d'eceptions   : ValueError
                      NameError
                      TypeError
                      ZeroDivisionError
                      OSError
                      AssertionError,...
"""

"""
try: 
    Age_utilisateur= int(input("quel âge as tu ? "))
    print("tu as", Age_utilisateur,"ans")
except:
    print("l'âge indiqué est incorrect !")
finally: 
    print("FIN DU PROGRAMME ... ")
"""


try :
    nombre1= 150
    nombre2= int(input("Entrez une valeur pour le nombre 2 : "))
    print("le resultat est de {}".format(nombre1/ nombre2))
except ZeroDivisionError :
    print("veuillez entrez un nombre different de 0.")
finally: 
    print("FIN DU PROGRAMME ... ")
