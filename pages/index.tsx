import { ChangeEvent, useEffect, useState } from "react";
import { AsyncState } from "react-use/lib/useAsyncFn";
import { useSearch } from "../lib/hooks/useSearch";
import { StarWarsCharacter, SwapiResult } from "../lib/types";
import { useDebounce } from "../lib/hooks/useDebounce";
import CharactersComponent from "../lib/components/charactersComponent/CharactersComponent";
import FallbackComponent from "../lib/components/commonComponents/FallbackComponent";
import LoadingComponent from "../lib/components/commonComponents/LoadingComponent";


const buildResult = (result: AsyncState<SwapiResult<StarWarsCharacter>>) => {
  if (result.error) return FallbackComponent({ error: result.error })

  if (result.value) return CharactersComponent({ data: result.value })
}

const Home = () => {
  const [result, searchByTerm, searchByPaginationUrl] = useSearch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    searchByTerm(debouncedSearchTerm)
  }
    , [debouncedSearchTerm]);

  return (
    <div>
      <h1>Star Wars Search</h1>
      <input
        onChange={handleChange}
      />
      <h2>Search results{result.value && ` (${result.value?.count} results)`}:</h2>
      {
        buildResult(result)
      }
      { // pagination
        result.value && <div>
          <button disabled={result.value.previous === null} onClick={() => searchByPaginationUrl(result.value!.previous)} style={{ marginRight: "10px" }}>previous</button>
          <button disabled={result.value.next === null} onClick={() => searchByPaginationUrl(result.value!.next)}>next</button>
        </div>
      }
      {
        result.loading && LoadingComponent() // Put it below to avoid layout shifting
      }
    </div>
  );
};

export default Home;
