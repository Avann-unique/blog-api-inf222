const db = require('../database');

const ArticleModel = {
    //Creer un nouvel article
    create: (data) => {
        const stmt = db.prepare(`
            INSERT INTO articles (titre, contenu, auteur, date, categorie, tags) 
            VALUES (?, ?, ?, ?, ?, ?)
            `);
            const result = stmt.run(
                data.titre,
                data.contenu,
                data.auteur,
                date.date || new Date().toISOString().split('T')[0],
                data.categorie,
                JSON.stringify(data.tags || [])
            );
            return ArticleModel.findById(result.lastInsertRowid);

            },

            //Tous les articles (avec filtres optionnels)
            findAll: (filters = {}) => {
                let query = 'SELECT * FROM articles WHERE 1=1';
                const params = [];
                if (filters.categorie) {
                    query += ' AND categorie = ?';
                    params.push(filters.categorie);
                }
                if (filters.auteur) {
                    query += ' AND auteur = ?';
                    params.push(filters.auteur);
                }
                if (filters.date) {
                    query += ' AND date = ?';
                    params.push(filters.date);
                }
                return db.prepare(query).all(...params);
            },
            
            //Trouver un article par son ID
            findById: (id) => {
                return db.prepare('SELECT * FROM articles WHERE id = ?').get(id);
            },

            //Modifier / Mettre à jour un article
            update: (id, data) => {
                const stmt = db.prepare(`
                    UPDATE articles 
                    SET titre = ?, contenu = ?, categorie = ?, tags = ?
                    WHERE id = ?
                `);
                stmt.run(data.titre, data.contenu, data.categorie, JSON.stringify(data.tags || []), id);
                return ArticleModel.findById(id);
            },

            //Supprimer un article
            delete: (id) => {
                return db.prepare('DELETE FROM articles WHERE id = ?').run(id);
            },

            //rechercher des articles par titre ou contenu (mot-clé)
            search: (keyword) => {
                return db.prepare(`
                    SELECT * FROM articles 
                    WHERE titre LIKE ? OR contenu LIKE ?
                `).all(`%${keyword}%`, `%${keyword}%`);
            }
};

module.exports = ArticleModel;