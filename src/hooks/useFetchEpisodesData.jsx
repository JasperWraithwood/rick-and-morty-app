import { useQuery } from "@tanstack/react-query";

export const useFetchEpisodesData = () =>
  useQuery(["episodes"], async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);

    const episodesData = await response.json();

    const totalPages = episodesData.info.pages;

    if (totalPages > 1) {
      const fetchPromises = [];

      for (let page = 2; page <= totalPages; page++) {
        fetchPromises.push(
          fetch(`https://rickandmortyapi.com/api/episode?page=${page}`).then(
            (response) => response.json()
          )
        );
      }

      const additionalPagesData = await Promise.all(fetchPromises);

      episodesData.results.push(
        ...additionalPagesData.flatMap((data) => data.results)
      );
    }

    return episodesData;
  });
