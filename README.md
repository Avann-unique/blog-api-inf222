# 📝 Blog API — INF222 EC1

API REST backend pour la gestion d'articles de blog.  
Développée avec Node.js, Express et SQLite.

## 👤 Auteur
- **Nom :** Ton Nom
- **Prénom :** Ton Prénom  
- **Matricule :** Ton Matricule
- **Filière :** Ta Filière
- **UE :** INF222

## ⚙️ Installation

### Prérequis
- Node.js v22+
- Git

### Étapes
```bash
# Cloner le dépôt
git clone https://github.com/Avann-unique/blog-api-inf222.git

# Entrer dans le dossier
cd blog-api-inf222

# Installer les dépendances
npm install

# Démarrer le serveur
npm run dev
Le serveur démarre sur http://localhost:3000
🗂️ Structure du projet
blog-api-inf222/
├── src/
│   ├── controllers/
│   │   └── article.controller.js
│   ├── models/
│   │   └── article.model.js
│   ├── routes/
│   │   └── article.routes.js
│   ├── database.js
│   └── app.js
├── .gitignore
├── package.json
└── README.md
🛣️ Endpoints de l'API
Base URL : http://localhost:3000
Méthode
Endpoint
Description
GET
/
Vérifier que l'API fonctionne
POST
/api/articles
Créer un article
GET
/api/articles
Lister tous les articles
GET
/api/articles/:id
Obtenir un article par ID
PUT
/api/articles/:id
Modifier un article
DELETE
/api/articles/:id
Supprimer un article
GET
/api/articles/search?query=texte
Rechercher des articles
GET
/api/articles?categorie=Tech
Filtrer par catégorie
GET
/api/articles?auteur=Alice
Filtrer par auteur
GET
/api/articles?date=2026-03-20
Filtrer par date
📋 Exemples d'utilisation
Créer un article
POST /api/articles
{
  "titre": "Mon premier article",
  "contenu": "Contenu de l'article",
  "auteur": "Alice",
  "categorie": "Technologie",
  "tags": ["node", "express"]
}
Réponse 201 :
{
  "message": "Article créé ✅",
  "article": {
    "id": 1,
    "titre": "Mon premier article",
    "auteur": "Alice",
    "date": "2026-03-20",
    "categorie": "Technologie"
  }
}
Lire tous les articles
GET /api/articles
Réponse 200 :
{
  "articles": [
    { "id": 1, "titre": "Mon premier article", "auteur": "Alice" }
  ]
}
Rechercher un article
GET /api/articles/search?query=premier
Réponse 200 :
{
  "articles": [
    { "id": 1, "titre": "Mon premier article" }
  ]
}
✅ Codes HTTP utilisés
Code
Signification
200
Succès
201
Création réussie
400
Requête mal formée
404
Article non trouvé
500
Erreur serveur
🛠️ Technologies utilisées
Node.js — Environnement d'exécution
Express — Framework web
SQLite — Base de données
better-sqlite3 — Driver SQLite
nodemon — Rechargement automatique
