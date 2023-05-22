import { useQuery } from "@tanstack/react-query";
export const useFetchCharData = (name, status) =>
  useQuery(["characters", name, status], async () => {
    const params = new URLSearchParams();
    if (name) {
      params.append("name", name);
    }
    if (status) {
      params.append("status", status);
    }

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?${params}`
    );
    const charData = await response.json();
    return charData;
  });
