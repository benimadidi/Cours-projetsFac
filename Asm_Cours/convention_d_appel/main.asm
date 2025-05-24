
;     Convention d'appel Windows x64 :
;     - rcx, rdx, r8, r9 : 4 premiers arguments
;     - Les suivants sont passés sur la pile (de droite à gauche)
;     - La pile doit être alignée sur 16 octets avant chaque call


bits 64 
 
extern GetStdHandle     
extern WriteConsoleA    
extern ExitProcess     

section .data
    message db 'Hello world !', 10 

section .bss 
    written resq 1       

section .text 
    global main 
    main:
        mov rcx, -11            ; code pour obtenir le handle de sortie console(STD_OUTPUT_HANDLE)
        call GetStdHandle       ; rax = handle console

        sub rsp, 32             ; réserve 40 octets, pour aligner la pile sur 16 octets
        sub rsp, 8

        mov rcx, rax            ; 1er argument : handle console
        mov rdx, message        ; 2e argument : adresse du message
        mov r8, 13              ; 3e argument : longueur du message
        mov r9, written         ; 4e argument : adresse où WriteConsoleA va écrire le nombre de caractères réellement affichés
        mov qword [rsp+32], 0   ; 5e argument : on reserve 32 octets pour aligner la pile sur 16 octets selon la convention d'appel 
        call WriteConsoleA 

        add rsp, 32+8           ; restaure la pile

        xor ecx, ecx            ; code de sortie = 0
        call ExitProcess    
