import { useQuery } from "@tanstack/react-query";

export const useFetchSinglecharData = (id) =>
  useQuery(["characters", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const singlecharData = await response.json();
    return singlecharData;
  });
