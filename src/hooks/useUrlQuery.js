// hooks/useUrlQuery.js
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useUrlQuery() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [query, setQuery] = useState(new URLSearchParams(search));

  useEffect(() => {
    setQuery(new URLSearchParams(search));
  }, [search]);

  const updateQueryParam = (param, value) => {
    const newQuery = new URLSearchParams(search);

    value !== null && value !== undefined
      ? newQuery.set(param, value)
      : newQuery.delete(param);

    navigate(`?${newQuery.toString()}`);
  };

  return { query, updateQueryParam };
}
