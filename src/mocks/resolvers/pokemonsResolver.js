import pokemons from '../storedData/pokemon.json'

export const pokemonsResolver = (req, res, ctx) => {
  return res(ctx.json(pokemons))
}
