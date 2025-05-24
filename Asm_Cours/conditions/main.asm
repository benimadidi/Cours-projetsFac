bits 64

extern GetStdHandle
extern WriteConsoleA
extern ExitProcess

SHADOWSPACE_SIZE : equ 32
STD_OUTPUT_HANDLE : equ -11
NULL : equ 0

section .data
    nombre1 : dq 5
    nombre2 : dq 5

    message_equals : db "nombre 1 est egal a nombre 2", 10
    MESSAGE_EQUALS_LENGTH : equ $ - message_equals

    message_not_equals : db "nombre 1 est different de nombre 2", 10
    MESSAGE_NOT_EQUALS_LENGTH : equ $ - message_not_equals

section .bss
    written : resq 1 

section .text
    global _main
    _main:
        mov rax, [nombre1]
        mov rbx, [nombre2]
        cmp rax, rbx
        je equals

    not_equals:
        mov rcx, STD_OUTPUT_HANDLE
        call GetStdHandle

        sub rsp, SHADOWSPACE_SIZE
        sub rsp, 8

        mov rcx, rax                
        mov rdx, message_not_equals  
        mov r8, MESSAGE_NOT_EQUALS_LENGTH 
        mov r9, written       

        mov qword [rsp+SHADOWSPACE_SIZE], NULL

        call WriteConsoleA

        add rsp, SHADOWSPACE_SIZE+8
        jmp exit_program

    equals:
        mov rcx, STD_OUTPUT_HANDLE
        call GetStdHandle


        sub rsp, SHADOWSPACE_SIZE
        sub rsp, 8

        mov rcx, rax
        mov rdx, message_equals
        mov r8, MESSAGE_EQUALS_LENGTH
        mov r9, written

        mov qword [rsp+SHADOWSPACE_SIZE], NULL
        call WriteConsoleA

        add rsp, SHADOWSPACE_SIZE+8
        jmp exit_program

    exit_program:
        xor ecx, ecx 
        call ExitProcess
