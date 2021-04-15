const express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();
const port = 3000;

const getEvolution = async (url) => {
    const evolutionChanin = await axios.get(`${url}`).then(response => {
        let initialPath = 'response.data.chain';
        const pokemonChain = [];
        do{ 
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

app.get('/', async (req, res) => {
    const generalInfo = await axios.get('https://pokeapi.co/api/v2/pokemon/pichu/')
        .then(response => {
                return {
                general: {
                    abilities: response.data.abilities,
                    name: response.data.name,
                    images: response.data.sprites.other['official-artwork'].front_default,
                    index: response.data.id,
                    types: response.data.types,
                    height: response.data.height,
                    weight: response.data.weight
                },
                stats: {
                    base: {
                        hp: response.data.stats[0].base_stat,
                        attack: response.data.stats[1].base_stat,
                        defense: response.data.stats[2].base_stat,
                        special_attack: response.data.stats[3].base_stat,
                        special_defense: response.data.stats[4].base_stat,
                        speed: response.data.stats[5].base_stat,
                    },
                    max: {
                        hp: ((response.data.stats[0].base_stat * 2) + 204),
                        attack: (Math.floor(((response.data.stats[1].base_stat * 2) + 99) * 1.1)),
                        defense: (Math.floor(((response.data.stats[2].base_stat * 2) + 99) * 1.1)),
                        special_attack: (Math.floor(((response.data.stats[3].base_stat * 2) + 99) * 1.1)),
                        special_defense: (Math.floor(((response.data.stats[4].base_stat * 2) + 99) * 1.1)),
                        speed: (Math.floor(((response.data.stats[5].base_stat * 2) + 99) * 1.1)),
                    },
                    min: {
                        hp: (((response.data.stats[0].base_stat * 2) + 100) + 10),
                        attack: (Math.floor((((((response.data.stats[1].base_stat * 2) * 100) / 100) + 5) * 0.9))),
                        defense: (Math.floor((((((response.data.stats[2].base_stat * 2) * 100) / 100) + 5) * 0.9))),
                        special_attack: (Math.floor((((((response.data.stats[3].base_stat * 2) * 100) / 100) + 5) * 0.9))),
                        special_defense: (Math.floor((((((response.data.stats[4].base_stat * 2) * 100) / 100) + 5) * 0.9))),
                        speed:(Math.floor((((((response.data.stats[5].base_stat * 2) * 100) / 100) + 5) * 0.9))),
                    }
                },
                breeding: {
                    egg_groups: response.data.species.url,
                    gender_rate: response.data.species.url,
                    sprites: response.data.sprites.versions['generation-vii']['ultra-sun-ultra-moon']
                },
                training: {
                    base_exp: response.data.base_experience,
                    capture_rate: response.data.species.url,
                    base_happiness: response.data.species.url,
                    growth_rate: response.data.species.url,
                },
            }

        }).catch(err => console.log(err));

        const speciesInfo = await axios.get(`${generalInfo.training.capture_rate}`).then(response => {
            return {
                breeding: {
                    egg_groups: response.data.egg_groups,
                    gender_rate: response.data.gender_rate,
                },
                training: {
                    capture_rate: response.data.capture_rate,
                    base_happiness: response.data.base_happiness,
                    growth_rate: response.data.growth_rate.name,
                },
                evolution: response.data.evolution_chain.url
            };
        }).catch(err => console.log(err));

        const evolutionInfo = await getEvolution(speciesInfo.evolution);

        const pokeInfo = await {
            ...generalInfo,
            breeding: {
                ...generalInfo.breeding, 
                egg_groups: speciesInfo.breeding.egg_groups,
                gender_rate: speciesInfo.breeding.gender_rate 
            },
            training: {
                ...generalInfo.training,
                capture_rate: speciesInfo.training.capture_rate,
                base_happiness: speciesInfo.training.base_happiness,
                growth_rate: speciesInfo.training.growth_rate
            },
            evolution: {
                evolution_chain: evolutionInfo
            }
        };

        res.send(pokeInfo);
});

app.listen(port, () => `Server is running on port ${port}`);