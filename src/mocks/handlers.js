// src/mocks/handlers.js
import { rest } from 'msw'
import { pokemonsResolver } from './resolvers/pokemonsResolver'

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon?limit=15', pokemonsResolver),
]
