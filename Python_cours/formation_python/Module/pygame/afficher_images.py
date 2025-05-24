"""
image                            : pour afficher des images
    load("image")                : permet de charger une image à partir d'un fichier
    set_colrkey(couleur)         : rendre une couleur specifique transparente
    convert()                    : convertir un format pixel plus optimiser pour pygame
    convert_alpha()              : pour gerer la transparence de l'image
    blit(surface_source, (x, y)) : permet coller une surface
"""
import pygame

pygame.init()

window_resolution = (800,600)
couleur_blanche = (255,255,255)
couleur_noir = (0,0,0)
surface = pygame.display.set_mode(window_resolution)
pygame.display.set_caption("Afficher image")

flower = pygame.image.load("c:/Users/HP/Desktop/VS code/projets_python/formation_python/Module/pygame/images.png")
flower.convert_alpha()
flower.set_colorkey(couleur_noir)

launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False
            
    # corps du programme
    surface.fill(couleur_blanche)
    surface.blit(flower, [10,10])
 
    pygame.display.flip() # MAJ de la surface