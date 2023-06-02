import { useQuery } from "@tanstack/react-query";

export const useFetchSingleLocationData = (id) =>
  useQuery(["locations", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`
    );

    const singleLocationData = await response.json();

    return singleLocationData;
  });
