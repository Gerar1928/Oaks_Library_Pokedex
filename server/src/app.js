const express = require('express');
const app = express();
const pokemonData  = require('./utils/pokemon-data');

app.get('/general', (req, res) => {
    if (!req.query.pokemon) {
        return res.send({ error: 'Please insert a query string to fetch' });
    }
    pokemonData(req.query.pokemon, (err, pokemon) => {
        if (err !== undefined) {
            return res.send({ err });
        }
        res.send({ pokemon });
    });
});

app.get('/species', (req, res) => {
    if (!req.query.pokemon) {
        return res.send({ error: 'Please insert a query string to fetch' });
    }
    pokemonData(req.query.pokemon, (err, pokemon, species) => {
        if (err !== undefined) {
            return res.send({ err });
        }
        res.send({ species });
    });
});

app.get('/evolution', (req, res) => {
    if (!req.query.pokemon) {
        return res.send({ error: 'Please insert a query string to fetch' });
    }
    pokemonData(req.query.pokemon, (err, pokemon, species, evol) => {
        if (err !== undefined) {
            return res.send({ err });
        }
        res.send({ evol });
    });
});

app.listen(9000, () => console.log('API port running on 9000.'));
