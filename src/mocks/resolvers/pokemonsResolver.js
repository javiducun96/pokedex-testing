import pokemons from '../storedData/pokemon.json'
import pokemon1 from '../storedData/pokemon1.json'
import pokemon2 from '../storedData/pokemon2.json'
import pokemon3 from '../storedData/pokemon3.json'
import pokemon4 from '../storedData/pokemon4.json'
import pokemon5 from '../storedData/pokemon5.json'
import pokemon6 from '../storedData/pokemon6.json'
import pokemon7 from '../storedData/pokemon7.json'
import pokemon8 from '../storedData/pokemon8.json'
import pokemon9 from '../storedData/pokemon9.json'
import pokemon10 from '../storedData/pokemon10.json'
import pokemon11 from '../storedData/pokemon11.json'
import pokemon12 from '../storedData/pokemon12.json'
import pokemon13 from '../storedData/pokemon13.json'
import pokemon14 from '../storedData/pokemon14.json'
import pokemon15 from '../storedData/pokemon15.json'

export const pokemonsResolver = (req, res, ctx) => {
  return res(ctx.json(pokemons))
}

export const pokemonResolver = (req, res, ctx) => {
  const { pokemonId } = req.params
  const pokemon = getPokemon(pokemonId)
  console.log({ pokemonId, pokemon })
  return res(ctx.json(pokemon))
}

const getPokemon = (pokemonId) => {
  return [
    pokemon1,
    pokemon2,
    pokemon3,
    pokemon4,
    pokemon5,
    pokemon6,
    pokemon7,
    pokemon8,
    pokemon9,
    pokemon10,
    pokemon11,
    pokemon12,
    pokemon13,
    pokemon14,
    pokemon15,
  ][pokemonId]
}
