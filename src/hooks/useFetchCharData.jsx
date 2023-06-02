import { useQuery } from "@tanstack/react-query";

export const useFetchCharData = (page, name, status) =>
  useQuery(
    ["characters", page, name, status],
    async () => {
      console.log(name);
      const params = new URLSearchParams();

      if (name) {
        params.append("name", name);
      }

      if (status) {
        params.append("status", "alive");
      }

      if (page) {
        params.append("page", page);
      }

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?${params}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const charData = await response.json();

      return charData;
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
