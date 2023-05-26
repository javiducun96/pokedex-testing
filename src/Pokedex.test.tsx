import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemon from './pokemon.json'
import getPokemons from './services/getPokemons'

describe('Pokédex', () => {
  it('muestra los mismos pokemon que el listado de muestra', async () => {
    render(<Pokedex />)

    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))

    await getPokemons(15).then((pokemons) => {
      pokemons.forEach(({ name }) => {
        expect(screen.getByText(name)).toBeInTheDocument()
      })
    })
  })
})
