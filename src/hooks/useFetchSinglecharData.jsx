import { useQuery } from "@tanstack/react-query";

export const useFetchSingleCharData = (id) =>
  useQuery(["characters", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const singleCharacterData = await response.json();

    return singleCharacterData;
  });
