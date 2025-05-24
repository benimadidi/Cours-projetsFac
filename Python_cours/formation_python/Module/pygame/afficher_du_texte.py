"""
pygame.font.get_fonts() : permet de voir la liste des police installé sur l'ordi
    
font                    : permet de charger une police  
    SysFont(police de caractere, la taille de la police)    
    
render()                : permet de creer un rendu    
    (le texte, l'anti-alliasing, couleur du text, couleur de fond[optionnel])      
        
"""
"""
    arial_police.set_bold()      : mettre en gras
    arial_police.set_italic()    : mettre enitalique
    arial_police.set_underline() : souligner
"""
import pygame

pygame.init()
dimension = (640,480)
blanc = (255,255,255)

window_surface = pygame.display.set_mode(dimension)
pygame.display.set_caption("Afficher du texte")

arial_police = pygame.font.SysFont("arial", 150)
hello_text_surface = arial_police.render("WORLD", True, blanc)


window_surface.blit(hello_text_surface, [250,200])
pygame.display.flip()
launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False