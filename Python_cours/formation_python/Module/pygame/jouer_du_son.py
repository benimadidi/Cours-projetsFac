"""
pygame.mixer.Sound(chemin) : permet de charger un son

<Sound>.play()             : lance la lecture du son
    (loop= , time= , fadein= )
    loop                   : nombre de repetition de la musique (par defaut à 0)
    time                   : nombre de minute que doit se jouer un son
    fadein                 : le temps que le volume du son arrive a 100%
    
<Sound>.stop()             : arreter un son
<Sound>.fadeout(ms)        : gerer le rendu de fermeture     
<Sound>.set_volume()       : gerer le volume (0.0 -> 1.0)
<Sound>.get_volume()       : recuperer le volume
<Sound>.get_lenght()       

pygame.mixer.stop()        : arreter toutes les musique que le mixeur est entrain de jouer
pygame.mixer.pause()       : mettre en pause
pygame.mixer.unpause()     : reprendre la lecture
pygame.mixer.rewind()      : revenir au debut 

"""
import pygame

pygame.init()

dimension = (640,480)

windows_surface = pygame.display.set_mode(dimension)
pygame.display.set_caption("jouer du son ")

# lire les fichiers en streaming
pygame.mixer.music.load("C:/Users/hp/Desktop/VS CODE/projets_python/formation_python/Module/pygame/X-TALI_SONG.mp3")
pygame.mixer.music.play()


pygame.display.flip()
launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False
        elif event.type == pygame.KEYDOWN : 
            pygame.mixer.music.rewind()