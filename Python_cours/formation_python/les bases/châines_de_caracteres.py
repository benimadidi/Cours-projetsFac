"""  
Une méthode de châine travaille sur une copie, et pas sur la chaîne elle-même

str.upper      : (tout mettre en majuscule)
str.lower      : (tout mettre en minuscule)
str.casefold   : est utilisée pour convertir une chaîne de caractères en minuscules de manière plus "universelle" que la méthode lower()
str.capitalize : (mettre le débt de la phrase en majuscule)
str.title      : (mettre chaque début de mot en majuscule)
str.strip      : (enlève tout les espaces devant/apres un str )
str.center     : (<largeur> ,<caractere_remplissage>)

str.find       : (<chaîne>, <début>, <fin>) 
str.index      : (<chaîne>, <début>, <fin>)
str.replace    : (<ancienne>, <nouvelle>, <occurences>)

str.isalpha(), str.isdigit(),str.isdecimal(), str.isnumeric(), str.isalphanum(), str.startwith()

str.islower(), str.isupper()

str.isidentifier(), str.iskeyboard()

"""


age = input("Quel âge as tu ? ").capitalize()
print(age)
# Verification si l'âge ne contient que des chiffres (isdigit)
if age.isdigit():
    print(f"tu as {age} ans.")
else :
    print("veuillez entrer un âge valide (uniquement des chiffres)")


