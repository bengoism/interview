import { useState } from "react";
import { useAsync } from "react-use";
import { SwapiResult } from "../types";

const searchPeople = (term: string) =>
  fetch(`https://swapi.dev/api/people/?search=${term}`);

export const useSearch = () => {
  const [searchTerm, setSearch] = useState<string>();

  const result = useAsync<() => Promise<SwapiResult>>(
    () => searchPeople(searchTerm as string).then((resp) => resp.json()),
    [searchTerm]
  );

  return [result, setSearch] as const;
};
