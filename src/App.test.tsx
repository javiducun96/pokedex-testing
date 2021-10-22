import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Pokédex', () => {
  it('renders the component', () => {
    render(<App />)

    expect(screen.getByText(/aquí irán los pokemon/i)).toBeInTheDocument()
  })
})
