
"""
Opérateurs de comparaison:  == ( egal à) 
                            !=  (différent de )
                            < ( plus petit que)
                            > (plus grand que)
                            <= ( plus petit ou égal à)
                            >= (- plus grand ou égal à)

Mots clés des conditions : if/ elif / else

Conditions multiples     : and (ET)
                           or(OU)
                           in / not in (DANS/ PAS DANS) 

"""
#age> 12 ET age <= 25 --> 12 < age <= 25

age= input("quel âge as tu ? ")
age= int(age)

if 12 < age <= 25: 
    print("tu es un jeune ")
elif 0 < age <= 11:
    print("t'es encore un gamin")
elif 26 < age <= 100:
    print("t'es salement vieux")
else:
    print("t'es pas humain chef ")