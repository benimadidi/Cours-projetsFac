import tkinter
import pygame


pygame.init() 
resolution = (480,300)
blanc = (255,255,255)
screen = pygame.display.set_mode(resolution)
screen.fill(blanc)

pygame.display.flip()
launched = True
while launched :
    for event in pygame.event.get() :
        if event.type == pygame.QUIT :
            launched = False