import "./App.css";
import { useFetchCharData } from "./hooks/useFetchCharData.jsx";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {
  const [inputName, setInputName] = useState(null);
  const [isAlive, setIsAlive] = useState(null);
  const { data, isLoading } = useFetchCharData(inputName, isAlive);

  if (isLoading) return "Loading";

  function handleSearch(input) {
    setInputName(input);
  }

  function handleCheck(checked) {
    checked && setIsAlive("alive");
  }

  return (
    <div>
      <Header />
      <InputField searchName={handleSearch} isAlive={handleCheck} />

      <div className="flex flex-wrap">
        {data.results.map((character) => (
          <CharacterCard
            key={character.id}
            img={character.image}
            name={character.name}
            status={character.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
