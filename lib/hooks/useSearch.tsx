import { useAsyncFn } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";
import { StarWarsCharacter, SwapiResult } from "../types";

interface SearchByTerm {
  type: "term",
  term: string,
}

interface SearchByPaginationUrl{
  type: "url",
  url: string,
}

const searchPeople = (search: SearchByTerm | SearchByPaginationUrl): Promise<SwapiResult<StarWarsCharacter>> =>{
  let searchUrl;

  switch (search.type) {
    case "term":
      searchUrl = `https://swapi.dev/api/people/?search=${search.term}`;
      break;
    case "url":
      searchUrl = search.url;
      break;
    default:
      throw Error("Search type does not exist.")
  }

return fetch(searchUrl).then((resp) =>
    resp.json()
  );
}

export const useSearch = () => {
  const [result, search] = useAsyncFn(searchPeople);

  const searchByTerm = (term: string) => search({type:"term", term})
  const searchByPaginationUrl = (url: string) => search({type:"url", url})

  return [
    // AsyncState is easier to read so just casting it here as it is the same :)
    result as AsyncState<SwapiResult<StarWarsCharacter>>,
    searchByTerm,
    searchByPaginationUrl,
  ] as const;
};
