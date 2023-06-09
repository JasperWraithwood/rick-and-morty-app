import { useQuery } from "@tanstack/react-query";

export const useFetchMultipleEpisodesData = (ids) =>
  useQuery(["episodes", ids], async () => {
    const fetchPromises = ids.map((id) =>
      fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((response) =>
        response.json()
      )
    );

    let episodesData = await Promise.all(fetchPromises);

    if (!Array.isArray(episodesData)) {
      episodesData = [episodesData];
    }

    return episodesData;
  });
