"""
launched = true                     : sert comme un interrupteur
while launched                      : demarre une boucle
    for event in pygame.event.get() : recupere tous les evenements qui se sont produits 
        si l'evenement est de type QUIT in sort de la boucle est on ferme la fenetre
        
from pygame import locals : si on veut ne plus mettre le pygame avant chaque truc

pygame.font.SysFont()     : permet de charger une police
    (police, taille police)
    render()              : creer un rendu du texte
        (texte,anti-alliasing, couleur)
"""
import pygame

pygame.init()
dimension = (640,480)
blanc =(255,255,255)
noir = (0,0,0)

window_surface = pygame.display.set_mode(dimension, pygame.RESIZABLE)
pygame.display.set_caption("evenements")

arial_police = pygame.font.SysFont("arial", 30)
text = arial_police.render("{}".format(dimension), True, blanc)
window_surface.blit(text, [10,10])

pygame.display.flip()
launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False
            
        # gerer les evenements avec les touches du clavier
        elif event.type == pygame.KEYDOWN :
            if event.key == pygame.K_UP :
                print("Haut")
            elif event.key == pygame.K_DOWN :
                print("Bas")
            elif event.key == pygame.K_LEFT :
                print("Gauche")
            elif event.key == pygame.K_RIGHT :
                print("Droite")
            else :
                print("Autre touche ...")
        
        # gerer le redimensionnement en temps reel de la fenetre
        elif event.type == pygame.VIDEORESIZE :
            window_surface.fill(noir)
            text = arial_police.render("{}x{}".format(event.w, event.h), True, blanc)
            window_surface.blit(text, [10,10])
            pygame.display.flip()
            
        # gerer la position de la souris en temps reel 
        elif event.type == pygame.MOUSEMOTION :
            window_surface.fill(noir)
            text2 = arial_police.render("{}".format(event.pos), True, blanc)
            window_surface.blit(text, (10,10))
            window_surface.blit(text2,[10,50])
            pygame.display.flip()
