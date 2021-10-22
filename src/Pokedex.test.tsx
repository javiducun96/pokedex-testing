import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'

describe('Pokédex', () => {
  it('renderiza el componente [elimina este test, es de prueba ;)]', () => {
    render(<Pokedex />)

    expect(screen.getByText(/aquí irán los pokemon/i)).toBeInTheDocument()
  })
})
