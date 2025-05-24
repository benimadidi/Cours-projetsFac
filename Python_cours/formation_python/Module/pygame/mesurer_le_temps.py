"""
pygame.time.Clock()              : permet de créer un objet qui gère le contrôle de la fréquence d'actualisation.
pygame.time.get_ticks()          : recupere le temps ecoulé depuis l'initialisation  de pygame (en milli seconde)
pygame.time.wait(milli-seconde)  : permet de mettre en pause le programme
pygame.time.delay(milli-seconde) : permet au processeur de mettre ne pause le programme

<varible> =pygame.time.Clock()   : permet de suivre le temps qui s'ecoule depuis l'initialisation 
<varible>.tick(fps)              :permet de limiter le nombre d'imge pas seconde (fps)


"""
import pygame

pygame.init()
clock = pygame.time.Clock()

pygame.time.set_timer(pygame.USEREVENT,2000)

dimension = (640,480)
couleur_bleu = (132,180,255)
couleur_rouge = (255,180,132)
couleur_noir = (0,0,0)

windows_surface = pygame.display.set_mode(dimension)
pygame.display.set_caption("mesurer le temps")

arial_font = pygame.font.SysFont("arial", 36)

launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False
        elif event.type == pygame.USEREVENT :
            windows_surface.fill(couleur_noir)
            text = arial_font.render(f"{clock.get_fps() :.2f} FPS", True, couleur_rouge)
            windows_surface.blit(text, [100,100])
            pygame.display.flip()
            
    clock.tick(60)
