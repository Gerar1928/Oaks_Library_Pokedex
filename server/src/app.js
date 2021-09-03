const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const pokemonData = require('./utils/pokemon-data');
const evolutionInfoSchema = require('./utils/schema/evolution-info-schema');
const app = express();

app.use(cors());

app.get('/pokedex', (req, res) => {

    const pokemonName = _.kebabCase(req.query.pokemon.trim());

    if (!pokemonName) {
        return res.send({
            error: 'Please insert a query string to fetch'
        });
    }

    pokemonData(pokemonName, async (err, {
        generalInfo,
        speciesInfo,
        evolutionEndPoint
    }) => {
        if (err !== undefined) {
            return res.send({
                err
            });
        }
        const evolutionInfo = await evolutionInfoSchema(evolutionEndPoint)
        res.send({
            generalInfo,
            speciesInfo,
            evolutionInfo
        });
    });
});

const server = app.listen(9000, () => console.log(`API port running on ${server.address().port}.`));

