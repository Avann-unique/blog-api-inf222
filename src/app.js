const express = require('express');
const cors = require('cors');
const articleRoutes = require('./routes/article.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//route de bienvenue
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API de gestion de blog! INF222' });
});

// Utilisation des routes d'articles
app.use('/api/articles', articleRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});