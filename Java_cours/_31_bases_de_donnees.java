/*
    BASES DE DONNÉES (NOTIONS)

    - une base de données permet de stocker des informations
    - les données sont persistantes

    Types :
    - SQL    : MySQL, PostgreSQL, Oracle
    - NoSQL  : MongoDB, Firebase

    En Java :
    - connexion via JDBC
    - requêtes SQL exécutées depuis le code
*/

/*
    JDBC (Java DataBase Connectivity)

    - API Java pour se connecter à une base de données
    - permet d'exécuter des requêtes SQL

    Étapes principales :
    1. Charger le driver JDBC
    2. Créer une connexion (Connection)
    3. Créer une requête (Statement / PreparedStatement)
    4. Exécuter la requête
    5. Récupérer le résultat (ResultSet)
    6. Fermer la connexion

    Classes importantes :
    - DriverManager
    - Connection
    - Statement / PreparedStatement
    - ResultSet
*/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class _31_bases_de_donnees 
{

    public static void main(String[] args) 
    {

        String url = "jdbc:mysql://localhost:3306/java_cours";
        String user = "root";
        String password = "";

        Connection conn = null;
        Statement stmt = null;
        ResultSet  res = null;

        try
        {

            conn = DriverManager.getConnection(url, user, password);

            stmt = conn.createStatement();

            String query = "SELECT * FROM products";
            res = stmt.executeQuery(query);

            while(res.next())
            {

                int id = res.getInt("product_id");
                String name = res.getString("product_name");

                System.out.println("ID: " + id + ", Name: " + name);
                

            }

        }
        catch (SQLException e) 
        {

            System.out.println("Erreur : " + e.getMessage());

        }  

    }
    
}
