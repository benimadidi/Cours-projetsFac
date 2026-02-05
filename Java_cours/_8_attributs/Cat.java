/*
    ATTRIBUTS 

    - Les attributs décrivent un objet
    - Ils sont déclarés en private

    Convention :
    - le préfixe "m" signifie member (attribut de la classe)
    - permet de distinguer l’attribut du paramètre
      ex : mName (attribut) / name (paramètre)

    - this référence l’instance courante
*/

public class Cat {

    private String mName;
    private int mAge;

    public Cat(String name, int age) {

        this.mName = name;
        this.mAge = age;

        System.out.println(this.mName + " - " + this.mAge + " ans");
    }

}
