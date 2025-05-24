/*
Fonction de rappelle : une fonction qui est appelée par une autre fonction

- setTimeout() : appel une fonction apres un certain temps
    Syntaxe : setTimeout(fonction, temps, parametres)
        - fonction : la fonction qui sera appelée
        - temps : le temps en millisecondes avant d'appeler la fonction
        - parametres : les parametres de la fonction

- Les promesses : Permet de gerer des operations asynchrones
    - Syntaxe : new Promise(function(resolve, reject){});
    - Etats : 
        - Pending : en cours
        - Fulfilled : terminee
        - Rejected : echouee

    - Consommateur : 
        Syntaxe : promise.then(function(value){}).catch(function(reason){});
            - then() : Permet de gerer le resultat de la promesse
            - catch() : Permet de gerer l'erreur de la promesse
            - finally() : Permet d'executer du code quel que soit le resultat
            - all() : Permet de gerer plusieurs promesses
                Forme : Promise.all([p1, p2])
                - Attend que toutes les promesses soient resolues ou qu'une echoue.
            - any() : Si une promesse est resolue, la promesse globale est resolue
                - Retourne la premiere promesse resolue, meme si d'autres echouent.
            - race() : Si une promesse est resolue ou echouee, la promesse globale est resolue
                - Retourne la premiere promesse qui termine (resolue ou rejetee).

- fetch() : Permet de faire des requetes HTTP
    - Syntaxe : fetch(url)
        - url : l'url de la requete
    - Retourne une promesse qui se resout avec un objet Response.
    - .ok : Retourne true si la requete a fonctionne
        Ex : fetch(url).then(response => {
            if(response.ok){
                console.log("La requete a fonctionne");
            }
        })

- async/await : Permet de gerer les promesses de maniere plus lisible
    - async : Declare une fonction asynchrone qui retourne une promesse.
    - await : Attend la resolution d'une promesse avant de continuer l'execution.
        Ex :
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Erreur :", error);
            }
        }
*/

/*-------------------------------------------------------------*/
//1. Recupperer les utilisateurs
function getUser(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const user = {
                "username" : "Dady",
                "age" : 18
            };

            resolve(user);
        }, 3000);
    });
}

//2. afficher les utilisateurs
async function printUser(){
    try{
        const userData = await getUser();
        console.log(userData.username);
        console.log(userData.age);
    }
    catch(error){
        console.error(error);
    }
}

printUser();
/*-------------------------------------------------------------*/



/*-------------------------------------------------------------*/
//Cas d'utilisation de fetch et de promesses
function checkUrl(url){
    return new Promise((resolve, reject) =>{
        fetch(url).then(response =>{
            if (response.ok)
                resolve(`Adresse valide : ${url}`);
            else
                resolve(`Adresse invalide : ${url}`);
        }).catch(error =>{
            resolve(`Invalide : ${error}`);    
        }
        )
    });
}
function showUrls(){
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/99999",
        "https://jsonplaceholder.typicode.com/posts/3"
    ];

    const allUrls = urls.map(url => checkUrl(url));

    Promise.all(allUrls).then(results =>{
        results.forEach(result =>{
            console.log(result);
        });
    }).catch(error =>{
        console.log(`ERREUR : ${error}`);
    });
}

// showUrls();
