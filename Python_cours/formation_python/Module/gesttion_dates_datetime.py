"""
datetime(params) : Affiche la date et l'heure de manière flexible      |
date(params)     : Affiche la date de manière flexible                 |  ex : print(d1.year) : pour recuperer juste l'année,...
time(params)     : Affiche l'heure de manière flexible                 |

datetime.now()   : recuperer la date et le temps actuel  
date.today()     : recuperer le jour actuel

"""

import datetime

mtn = datetime.date.today()
nss = datetime.datetime(2007, 3, 28)
print(f"tu as {mtn.year - nss.year} ans")


