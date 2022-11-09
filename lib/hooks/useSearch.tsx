import { useAsyncFn } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";
import { StarWarsCharacter, SwapiResult } from "../types";

const searchPeople = (term: string): Promise<SwapiResult<StarWarsCharacter>> =>
  fetch(`https://swapi.dev/api/people/?search=${term}`).then((resp) =>
    resp.json()
  );

export const useSearch = () => {
  const [result, search] = useAsyncFn(searchPeople);

  return [
    // AsyncState is easier to read so just casting it here as it is the same :)
    result as AsyncState<SwapiResult<StarWarsCharacter>>,
    search,
  ] as const;
};
