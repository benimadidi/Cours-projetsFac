"""
http.server                          : un module qui permet des creer des serveurs HTTP simple pour python
    SimpleHTTPRequestHandler         : gerer les requetes http de maniere simple
socketserver                         : c'est un cadre pour construire des serveurs
    TCPServer(adresse, gestionnaire) : on cree une instance de serveur 

serve_forever()                      : une methode qui dit au serveurs d'ecouter jsqu'a ce qu'il soit arrete 

port                                 : definir le port sur lequel le serveur va ecouter les connexions
    Le port 80 est le port standard pour le protocole HTTP.

adress                               : ("") signifie que le serveur écoutera sur toutes les interfaces réseau disponibles

---------------------------------------------------------------------------------------------------------------------------
      CGI   : Ce sont des programmes qui peuvent générer du contenu dynamique, 
              comme des salutations personnalisées ou des requêtes à une base de données.
http.server     
    http.server.HTTPServer            : creer un objet de type serveur HTTP; c'est comme la strcuture d'une maison
    http.server.CGIHTTPRequestHandler : le gestionnaire de requete
    .cgi_directories = ["/"]          : indique au gestionnaire CGI de chercher le script dans le repertoire racine du serveur
        ["/"]                         : pour dire que le serveur se touve "ici"

"""
import http.server
"""
import socketserver

port = 80
adress = ("", port)

handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(adress, handler)

print(f"le serveur est demaré sur le port {port}")
httpd.serve_forever()

"""

# un serveur CGI

#definition de port et de l'addresse
port  = 80 
adress = ("", port)
#Configuration du serveur et du gestionnaire
server = http.server.HTTPServer
handler = http.server.CGIHTTPRequestHandler
handler.cgi_directories = ["/"]
# Démarrage du serveur
httpd = server(adress, handler)
print(f" le serveur est démaré sur le port {port}")
httpd.serve_forever()
