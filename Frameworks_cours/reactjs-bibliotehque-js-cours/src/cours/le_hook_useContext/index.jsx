
{/*
⚡ Hook useContext

👉 Définition :
- Le hook useContext permet d’**accéder à un contexte** React directement depuis un composant fonctionnel.
- Le "contexte" (Context API) sert à partager des données entre plusieurs composants **sans avoir à passer des props** manuellement à chaque niveau.
- C’est pratique pour les thèmes (dark/light), la langue, l’utilisateur connecté, etc.

👉 Étapes pour utiliser useContext :
1. Créer un contexte avec `createContext`.
2. Fournir une valeur via le `Provider`.
3. Consommer cette valeur dans n’importe quel composant avec `useContext`.

👉 Syntaxe :
const valeur = useContext(MonContexte);

👉 Avantages :
- Évite le "prop drilling" (passer des props de parent → enfant → petit-enfant inutilement).
- Rend le code plus clair quand plusieurs composants partagent les mêmes données.

👉 Limites :
- Attention à ne pas abuser du contexte pour tout → il est surtout utile pour les données **globales**.
- Si la valeur change souvent, ça peut provoquer des re-renders nombreux.
*/}

import React, { createContext, useContext, useState } from "react";

// 1️⃣ Créer le contexte
const ThemeContext = createContext();

// 2️⃣ Fournir le contexte à toute l’application
function LeHookUseContext() {
    const [theme, setTheme] = useState("light");

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
    </ThemeContext.Provider>
    
}

// 3️⃣ Consommer le contexte dans un composant enfant
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // On récupère la valeur du contexte avec useContext
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      Thème actuel : {theme}
    </button>
  );
}

export default LeHookUseContext;


/*
👉 Cas d’usage typiques de useContext :
- Gérer le thème global (light/dark)
- Stocker les infos de l’utilisateur connecté
- Gestion de la langue (traductions)
- Paramètres globaux accessibles partout
*/
