import { StarWarsCharacter, SwapiResult } from "../../types"
import CharactersComponent from "./CharactersComponent"

const mockCharacters: StarWarsCharacter[] = [
  {
    name: "Anakin",
    height: 'todo',
    mass: 'todo',
    hair_color: 'todo',
    skin_color: 'todo',
    eye_color: 'todo',
    birth_year: 'todo',
    gender: 'todo',
    homeworld: 'todo',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: 'todo',
    edited: 'todo',
    url: 'todo'
  },
  {
    name: "Han Solo",
    height: 'todo',
    mass: 'todo',
    hair_color: 'todo',
    skin_color: 'todo',
    eye_color: 'todo',
    birth_year: 'todo',
    gender: 'todo',
    homeworld: 'todo',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: 'todo',
    edited: 'todo',
    url: 'todo'
  }
]

const mockSwapiResult: SwapiResult<StarWarsCharacter> = {
  count: 2,
  next: "",
  previous: "",
  results: mockCharacters
}

it('have length equal to the swapi result count', () => {
  cy.mount(<CharactersComponent data={mockSwapiResult} />)
  cy.get('.character').should("have.length", mockSwapiResult.count)
})