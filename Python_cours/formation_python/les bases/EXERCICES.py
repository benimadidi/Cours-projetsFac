# generateur de mot de passe

import secrets
import string

def generateur_de_motdepasse(lenght = 14) :
    alphabet = (
        string.ascii_letters +
        string.digits
    )
    return "".join(secrets.choice(alphabet) for i in range(lenght))
print(f"mot de passe : {generateur_de_motdepasse()}")


#   [SEANCE DU 06 JANV]

"""liste = []
liste.append(4)
liste.insert(0, 10)
liste.append("eale") 
liste.insert(0, "anna")
print(liste)"""

#   [SEANCE DU 13 JANV]

print("\n")
liste4 = [10,20,30,40,50]
liste =[60,70,80]
liste4.extend(liste)
liste4.insert(2, 25)
liste4.pop(5)

print(liste4)

for i in liste4[:] :
    if i >= 50 :
        liste4.remove(i)
print(liste4)