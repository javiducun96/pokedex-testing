import React, { useState, useEffect } from 'react'
import getPokemons from './services/getPokemons'
import { Pokemon } from './entities/Pokemon'

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getPokemons(15).then((data) => {
      setPokemons(data)
      setLoading(false)
      setError('')
    })
  }, [])

  if (loading) return <div id="loading">Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <ul>
      {pokemons.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  )
}
