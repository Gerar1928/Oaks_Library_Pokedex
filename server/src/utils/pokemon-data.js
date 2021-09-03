const axios = require('axios');
const generalInfoSchema = require('./schema/general-info-schema');
const speciesInfoSchema = require('./schema/species-info-schema');

const pokemonData = (pokemonName, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    axios.get(url)
        .then(res => {
            const mainData = res.data;
            const species = mainData.species.url;
            const generalInfo = generalInfoSchema(res);

            axios.get(species).then(res => {
                const speciesData = res.data;
                const speciesInfo = speciesInfoSchema(res, mainData);
                const evolutionEndPoint = speciesData.evolution_chain.url;

                callback(undefined, {
                    generalInfo,
                    speciesInfo,
                    evolutionEndPoint
                });
            });
        }).catch(err => {
            callback('No pokemon found under this name. Please try another one.', err);
        });
}

module.exports = pokemonData;