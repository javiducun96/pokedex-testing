import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'

describe('Pokédex', () => {
  it('muestra pokemon bulbasaur', () => {
    render(<Pokedex />)

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })

  it('muestra pokemon ivysaur', () => {
    render(<Pokedex />)

    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument()
  })
})
