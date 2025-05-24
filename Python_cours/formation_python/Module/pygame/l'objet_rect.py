
import pygame
import time 

"""
  pygame.Rect(x,y,width,heght) : constructeur pour tracer un rectangle  
  
  Rect.copy()                  : creer une copie 
  Rect.move() | Rect.move_ip   : creer une animation
  Rect.inflate()               : permet d'agrandir ou de retrecir le rectangle 
  Rect.colliderect()           : permet de detecter les collisions
  """
pygame.init()  #initialisation de pygame
i = 0
resolution = (640,480)
couleur_blanche = (255,255,255)
couleur_noir = (0,0,0)
couleur_rouge = (255,0,0)
couleur_bleu = (0,75,255)

windows_surface = pygame.display.set_mode(resolution)
pygame.display.set_caption("l'objet rect")

Rect_forme = pygame.Rect(10, 100, 25, 25)
Rect_block = pygame.Rect(600,50,20,300)
pygame.draw.rect(windows_surface, couleur_rouge, Rect_forme)
pygame.draw.rect(windows_surface, couleur_bleu, Rect_block)
pygame.display.flip()

#Gerer la colision
while not Rect_forme.colliderect(Rect_block) :
    time.sleep(.010)
    windows_surface.fill(couleur_noir)
    Rect_forme.x += 1 
    pygame.draw.rect(windows_surface, couleur_rouge, Rect_forme)
    pygame.draw.rect(windows_surface, couleur_bleu, Rect_block)
    pygame.display.flip()

    
#créer une  animation du rectangle
"""
while i <100 :
    time.sleep(.010)
    windows_surface.fill(couleur_noir)
    Rect_forme.x += 1 
    Rect_forme.y += 1
    pygame.draw.rect(windows_surface, couleur_rouge, Rect_forme)
    pygame.display.flip()
    i += 1
"""

launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False


