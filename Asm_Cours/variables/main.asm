
;     Variables :
;         - section .data : variables initialisées (db, dw, dd, dq...)
;             - Forme : <nom> : <type> <valeur>
;             - equ : permet de définir une macro
;                 - $-<nom> : permet de calculer la taille d'une variable
            
;         - section .bss  : variables non initialisées (resb, resw, resd, resq...)
;             - Suffixes :
;                 b = 8 bits, w = 16 bits, d = 32 bits, q = 64 bits
;                 t = 80 bits, o = 128 bits, y = 256 bits, z = 512 bits, e = 1024 bits

;                 ; b ou t : décimal
;                 ; q ou o : octal
;                 ; b ou y : binaire
;                 ; h ou x : hexadecimal


bits 64

extern GetStdHandle
extern WriteConsoleA
extern ExitProcess



section .data
    message : db "Hello world !", 10
    MESSAGE_LENGTH : equ $-message
    STD_OUTPUT_HANDLE : equ -11
    SHADOWSPACE_SIZE : equ 32

section .bss
    written : resq 1

section .text
    global main
    main : 
        mov rcx, STD_OUTPUT_HANDLE        
        call GetStdHandle      

        ;-------------------------------------------------------------

        sub rsp, SHADOWSPACE_SIZE
        sub rsp, 8

        mov rcx, rax
        mov rdx, message
        mov r8, MESSAGE_LENGTH
        mov r9, written
        mov qword [rsp+SHADOWSPACE_SIZE], 0
        call WriteConsoleA
        add rsp SHADOWSPACE_SIZE+8

        ;-------------------------------------------------------------

        xor ecx, ecx
        call ExitProcess