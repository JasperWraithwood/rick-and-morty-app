import { useQuery } from "@tanstack/react-query";

export const useFetchSingleEpisodeData = (id) =>
  useQuery(["locations", id], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    const singleEpisodeData = await response.json();

    return singleEpisodeData;
  });
