const axios = require('axios');

const pokemonData = (pokemonName, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    axios.get(url)
    .then(res => {
        const mainData = res.data;
        const species = mainData.species.url;

        axios.get(species).then(res => {
            const speciesData = res.data;
            const evolution = speciesData.evolution_chain.url;
            
            axios.get(evolution).then(res => {
                callback(undefined, mainData, speciesData, res.data);
            });
        });
    }).catch(err => {
        callback('No pokemon found under this name. Please try another one.', undefined);
    });
}

module.exports = pokemonData;