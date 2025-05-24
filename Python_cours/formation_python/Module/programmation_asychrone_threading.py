"""
Threading : permet d'executer plusieurs tâches en ||

Threading.Thread        : creer des nouveaux threads
    target=             : la fonction qui sera éxécuté
Threading.Rlock()       : crée un verrou qui n'execute qu'un seul thread à la fois 

<variable>.start()      : lance l'execution du thread
<variable>.join()       : attendre la fin d'un thread avant de ceder la main au prgramme

"""

import time as t
import threading as thr

my_lock = thr.RLock()

def process_one() :
    i = 0
    while i < 3 :
        with my_lock :
            letters = "ABC"
            for lt in letters :
                print(lt)
                t.sleep(0.2) 
        i+=1
       
th1 = thr.Thread(target=process_one)
th1.start()
th1.join()

print("fin du thread")