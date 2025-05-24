

"""
Fonctions vues         : print()   -> afficher à l'ecran
                         input()   -> lire au clavier
                         type()    -> retourne le type d'une donnée, variable, etc.
                         int(), float(), str(), bool()-> "caster" une donnée, la convertir
                         str.format-> formater une chaîne

l'instruction "return" :  permet de renvoyer une valeur depuis une fonction. 
                          
"""

def dire(nom_personne= "toussaint", age_personne= 18 , message_personne= "cv ?"):
    print("{} ({} ans): {}".format(nom_personne, age_personne, message_personne))

dire("beni",message_personne="yo",age_personne=25 )



"""def show_inventory (*list_items):   
    for items in list_items:
        print(items)

show_inventory ("potion de soin")
show_inventory("carte", "lotion", "sac à dos", "bottes") """
 


def le_plus_grand_nombre(nombre1, nombre2):
    if nombre1 < nombre2:
        return nombre2
    elif nombre1> nombre2:
        return nombre1
    else:
        return "EGALITE"  
    
print(le_plus_grand_nombre(357, 500)) 
        
        
