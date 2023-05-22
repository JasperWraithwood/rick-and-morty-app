import { useQuery } from "@tanstack/react-query";

export const useFetchCharData = (page, name, status) =>
  useQuery(["characters", page, name, status], async () => {
    const params = new URLSearchParams();
    if (name) {
      params.append("name", name);
    }
    if (status) {
      params.append("status", status);
    }
    if (page) {
      params.append("page", page);
    }

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?${params}`
    );
    const charData = await response.json();
    return charData;
  });
