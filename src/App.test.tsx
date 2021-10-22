import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'

describe('Pokédex', () => {
  it('renders the component', () => {
    render(<Pokedex />)

    expect(screen.getByText(/aquí irán los pokemon/i)).toBeInTheDocument()
  })
})
