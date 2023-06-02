import { useQuery } from "@tanstack/react-query";

export const useFetchLocationsData = () =>
  useQuery(["locations"], async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/location`);

    const locationData = await response.json();

    const totalPages = locationData.info.pages;

    if (totalPages > 1) {
      const fetchPromises = [];

      for (let page = 2; page <= totalPages; page++) {
        fetchPromises.push(
          fetch(`https://rickandmortyapi.com/api/location?page=${page}`).then(
            (response) => response.json()
          )
        );
      }

      const additionalPagesData = await Promise.all(fetchPromises);

      locationData.results.push(
        ...additionalPagesData.flatMap((data) => data.results)
      );
    }

    return locationData;
  });
