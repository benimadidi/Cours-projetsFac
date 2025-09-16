

/*
Creer un hook qui permet d'editer le titre de la page web
*/

import { useEffect, useRef } from "react";



export function useDocumentTitle(title){

    const titleRef = useRef(document.title);

    useEffect(() => {
        return () => {
            document.title = titleRef.current;
        }
    }, [])
 
    useEffect(() => {
        document.title = title ? title : titleRef.current
    }, [title])

}


