const axios = require('axios');

const evolutionInfoSchema = async (url) => {
    const evolutionChanin = await axios.get(`${url}`).then(response => {
        let initialPath = 'response.data.chain';
        const pokemonChain = [];
        do { 
            if(!eval(initialPath).length) {
                pokemonChain.push(eval(initialPath));
                initialPath += '.evolves_to';
            } else {
                for(let i = 0; i < eval(initialPath).length; i++) {
                    pokemonChain.push(eval(initialPath)[i]);
                } 
                initialPath += '[0].evolves_to';
            }
        } while (eval(initialPath).length)

        return pokemonChain
    }).catch(err => console.log(err));

    const pokemonImages = Promise.all(evolutionChanin.map(async (pokemon) => {
            const imageUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.species.name}/`)
                        .then(response => response.data.sprites.other['official-artwork'].front_default)
                        .catch(err => console.log(err));
            return imageUrl;
        }));

    const evolutionInfo = {
        evolution_chain: await evolutionChanin,
        pokemon_images: await pokemonImages
    }
    return evolutionInfo;
}

module.exports = evolutionInfoSchema;