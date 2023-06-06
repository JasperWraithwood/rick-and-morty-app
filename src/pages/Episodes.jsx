import React, { useMemo } from "react";

import { useFetchEpisodesData } from "../hooks/useFetchEpisodesData";
import { TableComponent } from "../components/TableComponent";

function Episodes() {
  const { data, isLoading } = useFetchEpisodesData();

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Air date",
        accessor: "air_date",
      },
      {
        Header: "Episode",
        accessor: "episode",
      },
    ],
    []
  );

  const tableData = useMemo(() => {
    if (data) {
      return data.results;
    } else {
      return [];
    }
  }, [data]);

  if (isLoading) return "Loading";

  return (
    <div>
      <TableComponent columns={columns} data={tableData} navigation="episode" />
    </div>
  );
}

export default Episodes;
