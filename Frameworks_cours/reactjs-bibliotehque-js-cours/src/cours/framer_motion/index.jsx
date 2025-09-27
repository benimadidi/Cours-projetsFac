
/* 
📌 Framer Motion – Librairie d’animations pour React

🔹 Qu’est-ce que Framer Motion ?
  - Une librairie React pour créer facilement des animations fluides et interactives.
  - Alternative moderne à CSS animations ou GSAP, mais beaucoup plus intégrée à React.

---

🔹 Concepts de base :
1. motion (élément animé)
   - Tu utilises motion.div, motion.button, motion.img, etc. à la place des balises normales.
   - Chaque composant motion accepte des props spéciales (initial, animate, exit, transition...).

2. Props principales :
   - initial → état de départ de l’animation
   - animate → état final ou courant de l’animation
   - exit → état de sortie (utile avec React Router ou AnimatePresence)
   - transition → durée, type (spring, tween, easeInOut…), délai, etc.
   - whileHover → animation lorsqu’on passe le curseur sur l'élement
   - whileTap → animation lorsqu’on appuie sur l'élement

3. AnimatePresence
   - Permet d’animer l’entrée/sortie des composants (montage/démontage).
   - Exemple : transition entre pages dans une SPA.

4. Variants
   - Objet qui définit plusieurs états d’animations réutilisables.
   - Tu appliques le variant au composant motion et tu choisis l’état ("hidden", "visible", etc.).
   - Idéal pour animer plusieurs éléments en même temps avec une logique commune.

---

🔹 Exemple simple :
   import { motion } from "framer-motion";

   <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
   >
      Bonjour Nexora 👋
   </motion.div>

---

🔹 Exemple avec AnimatePresence :
   import { AnimatePresence, motion } from "framer-motion";

   <AnimatePresence>
      {isVisible && (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
         >
            Je disparais en douceur 😎
         </motion.div>
      )}
   </AnimatePresence>

---

🔹 Exemple avec Variants :
   const boxVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
   };

   <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7 }}
   >
      Animation réutilisable ✨
   </motion.div>

---

⚡ Points forts :
  - Syntaxe simple, intuitive et déclarative.
  - Compatible avec React Router pour les transitions de pages.
  - Gère animations complexes (gestures, drag, keyframes, layout animations).
  - Pas besoin de CSS keyframes → tout se fait en JS directement.

*/

import { forwardRef } from 'react'
import { useToggle } from '../hooks/useToggle'
import { motion } from 'framer-motion'

const boxVariants = {
    visible: { x: 0, opacity: 1, rotate: 0},
    hidden: {x: 100, opacity: 0, rotate: 45}
}

export default function FramerMotion() {
    const [open, toggle] = useToggle(true)

    return (
        <div className="container my-4 vstack gap-2">
            <motion.div className="vstack gap-2" animate={open ? "visible" : "hidden"}>  
                <MotionBox variants={boxVariants}>1</MotionBox>
                <MotionBox variants={boxVariants}>2</MotionBox>
                <MotionBox variants={boxVariants}>3</MotionBox>
            </motion.div>
            <div>
                <Button onClick={toggle}>Afficher / Masquer</Button>
            </div>
        </div>
    )
}

function Button({ onClick, children }) {
    const style = {
        border: 'none', 
        background:'rgba(10, 87, 230, 1)',
        color: 'white',
        borderRadius: '5px',
        padding: '5px'
    }
    return (
        <button type="button" onClick={onClick} style={style}>
            {children}
        </button>
    );
}

const Box = forwardRef(({children}, ref) => {
    return ( 
        <div 
            style={{
                padding: '20px', 
                background: '#a8a8a870', 
                width:'80px', 
                borderRadius:'10px', 
                border: '1px solid #797575c0',
                textAlign:'center', 
                fontWeight:'600', 
                fontSize:'25px'
            }}
            ref={ref}

        >
            {children}
        </div>
    )
})

const MotionBox = motion(Box)

function Page1() {
    return (
        <div>

        </div>
    )
}



