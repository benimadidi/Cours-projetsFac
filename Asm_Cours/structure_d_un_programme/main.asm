
    ; Les directives d'assemblage : permettent de définir la structure d'un programme assembleur.
    ;     - bits 64 : pour assembler en 64 bits
    ;     - extern : pour déclarer une fonction externe
    ;         - GetStdHandle, WriteConsoleA, ExitProcess : fonctions de la bibliiotheque Windows
    ;     - section : pour définir une section de code ou de données (ou segment)
    ;     - global : pour déclarer une fonction globale

    ; - <etiqutte> :
    ;     <instruction> <operande(s)>  

    ; - macros : permettent de définir des instructions réutilisables
    ;   - forme : %define <nom> <Valeur(s)> : permet de créer une macro
    ;             %include <fichier> : permet d'inclure un fichier



bits 64

%define HELLO 'Hello world !'


extern GetStdHandle
extern WriteConsoleA 
extern ExitProcess

section .data 
    message db HELLO, 10
    message_length equ $ - message

section .bss
    written resq 1

section .text
    global main  ;permet de rendre la fonction main visible pour le linker
    main:
        mov rcx, -11
        call GetStdHandle

        sub rsp, 32
        sub rsp, 8

        mov rcx, rax 
        mov rdx, message
        mov r8, message_length
        mov r9, written
        mov qword [rsp+32], 0
        call WriteConsoleA

        add rsp, 32+8

        xor ecx, ecx
        call ExitProcess