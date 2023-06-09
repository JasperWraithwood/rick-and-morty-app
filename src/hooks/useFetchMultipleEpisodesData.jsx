import { useQuery } from "@tanstack/react-query";

export const useFetchMultipleEpisodesData = (ids) =>
  useQuery(["episodes", ids], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${ids.join(",")}`
    );

    const multipleEpisodesData = await response.json();

    return multipleEpisodesData;
  });
