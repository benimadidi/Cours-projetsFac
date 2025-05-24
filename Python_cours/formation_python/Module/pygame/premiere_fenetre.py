"""
pygame                : une bibliothèque graphique 2d

    init()            : permet d'initialiser quelque module de python (pas tous) pour les charger dans le programme

    display           : afficher une surface
        set_caption() : ajouter un titre  
        set_mode(())  : permet de creer une surface   (|) : mettre plusieurs options 
            (tuple)   : gerer le dimensionnement de la surface
            le mode plein écran (pygame.FULLSCREEN)
            La possibilité de redimensionner la fenêtre (pygame.RESIZABLE)
            Enlever les options de contrôle de la surface (pygame.NOFARME)
            pygame.OPENGL
            pygame.HWSURFACE
            pygame.DOUBLEBUF 
"""
import pygame

pygame.init()
dimension =(640,480)
pygame.display.set_caption("première fênetre")
window_surface = pygame.display.set_mode(dimension, pygame.RESIZABLE)

#differente info
info_surface = pygame.display.Info()
info_version_sdl = pygame.get_sdl_version()
#boucle principale
launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False