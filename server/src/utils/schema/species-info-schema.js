const speciesInfoSchema = (response, fromGeneral) => {
    return {
        breeding: {
            egg_groups: response.data.egg_groups,
            gender_rate: response.data.gender_rate,
            sprites: fromGeneral.sprites.versions['generation-vii']['ultra-sun-ultra-moon']
        },
        training: {
            base_exp: fromGeneral.base_experience,
            capture_rate: response.data.capture_rate,
            base_happiness: response.data.base_happiness,
            growth_rate: response.data.growth_rate.name,
        }
    }
}

module.exports = speciesInfoSchema;