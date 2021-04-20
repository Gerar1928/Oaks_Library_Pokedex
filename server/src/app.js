const express = require('express');
const cors = require('cors');
const pokemonData  = require('./utils/pokemon-data');
const evolutionInfoSchema = require('./utils/schema/evolution-info-schema');

const app = express();
app.use(cors());

app.get('/pokedex', (req, res) => {
    if (!req.query.pokemon) {
        return res.send({ error: 'Please insert a query string to fetch' });
    }

    pokemonData(req.query.pokemon, async (err, { generalInfo, speciesInfo, evolutionEndPoint }) => {
        if (err !== undefined) {
            return res.send({ err });
        }
        const evolutionInfo = await evolutionInfoSchema(evolutionEndPoint)
        res.send({
            generalInfo,
            speciesInfo,
            evolutionInfo
        });
    });
});

app.listen(9000, () => console.log('API port running on 9000.'));

