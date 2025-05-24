    
"""
Création de dictionnaire                   : dico = {} # Vide
                                           : dico = {<clé> : <valeur>, <clé2> : <valeur>} 

Accèss à une valeur                        : dico[<clé>]
Ajout                                      : dico[<nouvelle_clé>] = <valeur>
Modification                               : dico[<clé>] = <nouvelle_valeur>

suppression                                : dico.pop(<clé>)
                                           : del dico[<clé>]

Copie de dictionnaire                      : dico2 = dico1.copy()
   
les clés que contiennent un dico           : dico.keys()                
les valeurs que contiennent un dico        : dico.values()
la clé et la valeurs ''     ''  ''         : dico.items()

.update()                                  : permet de fusionner des dictionnaires

zip(<clés>, <valeurs>)                     : joindre deux liste en un dictionnaire
sorted(<new_dico>.items())                 : trier un dictionnaire par clé

    dict() : le mettre au debut pour directement en faire un dictionnaire

(!) : ** = pour les parametres nommés

"""

dico = {"age" : 54, "nom" : "toi"}
print(dico["nom"])
for k,v in dico.items() :
    print("clé : {} - valeur : {}".format(k,v))

#Creer un dictionnaire a partir d'une liste  
clés = ["nom", "âge", "ville"]
valeurs = ["Alice", 30, "Paris"]
dictionnaire = dict(zip(clés, valeurs))
print(dictionnaire)

#Trier un dictionnaire par clé
dico2 = {'a': 1, 'c': 3, 'b': 2}
trier = dict(sorted(dico2.items()))
print(trier)