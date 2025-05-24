"""
code couleur : (R(rouge), G(vert), B(bleu))

fill(())      : permet de modifier la couleur de l'arriere plan de la surface
dispplay.flip : mettre a jour l'affichage à l'ecran 

pygame.draw   : permet de dessiner sur la surface
    line()    : dessiner une ligne à l'ecran
        (surface, couleur, debut_pas, fin_pas, epaisseur)
    rect()    : permet de tracer un rectangle 
        (surface, couleur, pygame.Rect[left, top, width, height], epaisseur))
    circle()  : tracer un cercle
        (surface, couleur, centre du cercle (x,y), rayon, epaisseur)
    polygon() : tracer un polygone
        (surface, couleur, coordonné des != angles, epaisseur )
"""
import pygame

pygame.init() #initialisation de pygame

dimension = (640, 480 )
couleur_bleu = (28, 109, 255)
couleur_noir = (0, 0, 0)

pygame.display.set_caption("Dessiner sur une surface") 
window_surface = pygame.display.set_mode(dimension)
window_surface.fill(couleur_bleu) # couleur de fond

coords = [(10,10), (100,10), (125,50), (35, 75)]
pygame.draw.polygon(window_surface, couleur_noir, coords, width= 2)

pygame.display.flip() #actualiser la surface
#boucle principale 
launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False
