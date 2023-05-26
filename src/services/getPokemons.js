async function getPokemons(limit = 15) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  const res = await fetch(url)
  const data = await res.json()
  const extendedPokemon = await getPokemonsExtendedInfo(data.results)
  return extendedPokemon
}

async function getPokemonsExtendedInfo(pokemons) {
  const getPokemon = async (pokemon) => {
    const res = await fetch(pokemon.url)
    const data = await res.json()
    return mapPokemon(data)
  }

  const extendedPokemons = await Promise.all(pokemons.map(getPokemon))

  return extendedPokemons
}

function getImageFromApiResponse(apiResponse) {
  let image = apiResponse?.sprites?.other?.['official-artwork']?.front_default
  if (image) return image

  image = apiResponse?.sprites?.other?.dream_world?.front_default
  if (image) return image
}

function getShinyImageFromApiResponse(apiResponse) {
  let image = apiResponse?.sprites?.other?.['official-artwork']?.front_shiny
  if (image) return image

  image = apiResponse?.sprites?.front_shiny
  if (image) return image
}

function mapPokemon(apiResponse) {
  const pokemon = {
    name: apiResponse.name,
    //number: apiResponse.id,
    //types: apiResponse.types.map((type) => type.type.name),
    //weight: apiResponse.weight / 10,
    //height: apiResponse.height / 10,
    //description:
    //  'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    //image: getImageFromApiResponse(apiResponse),
    //shinyImage: getShinyImageFromApiResponse(apiResponse),
  }
  return pokemon
}

export default getPokemons
