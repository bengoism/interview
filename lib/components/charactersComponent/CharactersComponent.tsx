import { SwapiResult, StarWarsCharacter } from "../../types";

interface CharactersProps {
  data: SwapiResult<StarWarsCharacter>
}

const CharactersComponent = (props: CharactersProps) => {
  if (props.data.count === 0) return <div>No search results!</div>

  return (
    <div>
      {
        props.data.results.map((character) => {
          return (
            <h3 key={character.name}>{character.name}</h3>
          )
        }
        )
      }
    </div>);
}

export default CharactersComponent;