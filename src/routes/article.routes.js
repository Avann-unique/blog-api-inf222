const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article.controller');

//IMPORTANT: /search AVANT /:id pour éviter les conflits de routes
router.get('/search', ArticleController.search);

router.post('/', ArticleController.create);
router.get('/', ArticleController.getAll);
router.get('/:id', ArticleController.getOne);
router.put('/:id', ArticleController.update);
router.delete('/:id', ArticleController.delete);

module.exports = router;