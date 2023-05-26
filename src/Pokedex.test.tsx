import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Pokedex } from './Pokedex'
import getPokemons from './services/getPokemons'
import { setupServer } from 'msw/lib/node'
import { rest } from 'msw'

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

  //test('get pokemons from api', async () => {
  //  const server = setupServer(
  //    // NOT "/user", nothing to be relative to!
  //    rest.get(
  //      'https://pokeapi.co/api/v2/pokemon?limit=15',
  //      (req, res, ctx) => {
  //        return res(ctx.json({ firstName: 'John' }))
  //      },
  //    ),
  //  )
  //})
})
