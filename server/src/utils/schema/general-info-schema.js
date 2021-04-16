const generalInfoSchema = response => {
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
        }
    }
}

module.exports = generalInfoSchema;