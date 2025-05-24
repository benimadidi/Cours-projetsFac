import re
import nltk
from nltk.probability import FreqDist
from textblob import TextBlob

nltk.download('punkt')

texte = """
Python est un langage de programmation très populaire. Il est utilisé pour le développement web, l'analyse de données, 
l'intelligence artificielle, et bien plus encore. Python est simple à apprendre et possède une grande communauté.
"""

texte = re.sub(r'\W+', ' ', texte).lower()

mots = nltk.word_tokenize(texte)

nombre_de_mots = len(mots)
nombre_de_phrases = texte.count('.') + texte.count('!') + texte.count('?')

freq_mots = FreqDist(mots)

longueurs_mots = [len(mot) for mot in mots]
longueur_moyenne = sum(longueurs_mots) / len(longueurs_mots) if longueurs_mots else 0

sentiment_score = TextBlob(texte).sentiment.polarity
sentiment = "Positif" if sentiment_score > 0 else "Négatif" if sentiment_score < 0 else "Neutre"

print(f"Nombre de mots : {nombre_de_mots}")
print(f"Nombre de phrases : {nombre_de_phrases}")
print(f"Longueur moyenne des mots : {longueur_moyenne:.2f}")
print(f"Sentiment : {sentiment}")
print("\nFréquence des mots :")
for mot, frequence in freq_mots.items():
    print(f"{mot}: {frequence}")

densite_lexicale = len(freq_mots) / nombre_de_mots if nombre_de_mots else 0
print(f"\nDensité lexicale : {densite_lexicale:.2f}")

print("\nLes mots les plus fréquents :")
for mot, frequence in freq_mots.most_common(5):
    print(f"{mot}: {frequence}")

diversite_lexicale = len(set(mots)) / nombre_de_mots if nombre_de_mots else 0
print(f"Diversité lexicale : {diversite_lexicale:.2f}")

phrases = re.split(r'[.!?]', texte)
longueurs_phrases = [len(re.findall(r'\w+', phrase)) for phrase in phrases]
longueur_moyenne_phrase = sum(longueurs_phrases) / len(longueurs_phrases) if longueurs_phrases else 0
print(f"Longueur moyenne des phrases : {longueur_moyenne_phrase:.2f}")

mots_cles = ["python", "langage", "programme", "développement", "intelligence"]
print("\nPrésence de mots-clés :")
for mot_cle in mots_cles:
    print(f"{mot_cle.capitalize()}: {'Oui' if mot_cle in texte else 'Non'}")

punctuation = re.findall(r'[.!?]', texte)
pourcentage_ponctuation = len(punctuation) / nombre_de_mots * 100 if nombre_de_mots else 0
print(f"Pourcentage de ponctuation : {pourcentage_ponctuation:.2f}%")
