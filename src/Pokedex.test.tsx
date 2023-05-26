import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemon from './pokemon.json'

describe('Pokédex', () => {
  it('muestra los mismos pokemon que el listado de muestra', () => {
    render(<Pokedex />)

    pokemon.results.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
