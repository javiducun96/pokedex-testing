import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'

describe('Pokédex', () => {
  it('muestra pokemon bulbasaur', () => {
    render(<Pokedex />)

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })
})
