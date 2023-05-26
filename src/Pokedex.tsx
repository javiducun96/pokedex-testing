import React from 'react'
import pokemon from './pokemon.json'

export const Pokedex: React.FC = () => {
  return (
    <ul>
      {pokemon.results.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  )
}
