/*                                                                                              /*
Declaration d'une fonction
    function nomFonction(parametres) {
        instructions
    }
    
    parametres : peut avoir une valeur par defaut. 
                 ...agrs : possible de mettre un nombre infini de parametres.

    
l'instruction "return" :  permet de renvoyer une valeur depuis une fonction. 
*/  


/*-----------------------------------------------*/
    /*---Declaration d'une fonction---*/
/*
function hello() {
    console.log("Hello world");
}
hello();
*/

/*-----------------------------------------------*/
    /*---Foncitons anonymes---*/
/*
let hi = function(){console.log("Hello world");};
hi();
*/
/*-----------------------------------------------*/
    /*---Foncitons flechees */
/*
    (<arguments>) => {instructions}
*/ 
let sum = (x, b) => {console.log(x + b)};
sum(16,18);