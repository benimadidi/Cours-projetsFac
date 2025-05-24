
"""
Modes d'ouverture : r (lecture seule)
                    w (écriture avec remplacement)
                    a (écriture avec ajout en fin de fichier)
                    x (lecture et écriture)
                    r+ (lecture/écriture dans un même fichier)

fic.open()        : Ouvre un fichier et renvoie un objet fichier.
fic.read()        : Lit le contenu d'un fichier.
fic.write()       : Écrit du contenu dans un fichier.
fic.close()       : Ferme un fichier.

fic.readline()    : lit une ligne d'un fichier
fic.readlines()   : lit le reste des lignes après un  readline sous forme de liste

(!)               : pas besoin de ferme le fichier avec with 

"""

# Ouvrir un fichier en mode écriture

with open("c:/Users/hp/Desktop/VS CODE/projets_python/formation_python/les bases/donnees.txt", "w") as fic :
    nombre = str(15)
    fic.write(f"{nombre}\n")
    fic.write("bonjour \n")
    
