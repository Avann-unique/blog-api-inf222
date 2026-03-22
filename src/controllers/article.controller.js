const ArticleModel = require('../models/article.model');

const ArticleController = {
    //Creer un nouvel article: POST /api/articles
    create: (req, res) => {
        const { titre, contenu, auteur, categorie, tags } = req.body;
        if (!titre || !contenu || !auteur || !categorie) {
            return res.status(400).json({ error: 'Tous les champs (titre, contenu, auteur, categorie) sont requis' });
        }
        const article = ArticleModel.create({ titre, contenu, auteur, categorie, tags });
        res.status(201).json({ message: 'Article créé avec succès', article });
    },

    //Obtenir tous les articles: GET /api/articles
    getAll: (req, res) => {
        const { categorie, auteur, date } = req.query;
        const articles = ArticleModel.findAll({ categorie, auteur, date });
        res.status(200).json({ articles });
    },

    //GET /api/articles/search?q=mot-clé
    search: (req, res) => {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ error: 'Le paramètre de recherche "q" est requis' });
        }

        const articles = ArticleModel.search(query);
        res.status(200).json({ articles });
    },

    //Obtenir un article par ID: GET /api/articles/:id
    getOne: (req, res) => {
        const article = ArticleModel.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        res.status(200).json({ article });
    },

    //Modifier un article: PUT /api/articles/:id
    update: (req, res) => {
        const article = ArticleModel.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        const updated = ArticleModel.update(req.params.id, {titre, contenu, categorie, tags});
        res.status(200).json({ message: 'Article mis à jour avec succès', article: updated });
    },

    //Supprimer un article: DELETE /api/articles/:id
    delete: (req, res) => {
        const article = ArticleModel.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article non trouvé' });
        }
        ArticleModel.delete(req.params.id);
        res.status(200).json({ message: 'Article supprimé avec succès' });
    }
};

module.exports = ArticleController;


