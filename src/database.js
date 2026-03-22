const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname,'..','database.db'));

//Creer la table articles si elle n'existe pas déjà
db.exec(`
CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    contenu TEXT NOT NULL,
    auteur TEXT NOT NULL,
    date TEXT NOT NULL,
    categorie TEXT NOT NULL,
    tags TEXT NOT NULL
)
`);

console.log('Base de donnees prete v');
module.exports = db;