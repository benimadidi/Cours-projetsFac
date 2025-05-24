/*
        [WHILE]
    while(condition){
    instruction
    }
    Se traduit par : 
        tant que <condition> fait ça 

        [DO WHILE]
    do{
    fait ça 
    }while(condition)
    Se traduit par : 
        fait ca tant que <condition>

        [FOR]
     for(1 ; 2 ; 3){
     instructions 
     }
        1 : initialisation
        2 : condition d'arret 
        3 : incrementation ou decrementation


    for...of : pour parcourir un tableau
    for...in : pour parcourir un objet

Mots clés : break (casser la boucle) / continue (revient au début de la boucle)

*/
let compteur = 0;

while (compteur < 5){
    document.writeln("A");
    compteur++;
}
document.writeln("-------------------------------------")

/*-----------------------------------------------------*/
let compteur2 = 0;

do {
    document.writeln("B");
    compteur2++;
}while (compteur2 < 5);

/*-----------------------------------------------------*/
document.writeln("-------------------------------------")

for( let i = 0; i < 10 ; i++){
    document.writeln("C");

    if(i === 5){
        continue ;
    }

    document.writeln("D ")
}
