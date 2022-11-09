import { useSearch } from "../lib/hooks/useSearch";

const Home = () => {
  const [result, search] = useSearch();
  return (
    <div>
      <h1>Star Wars Search</h1>
      <input
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
