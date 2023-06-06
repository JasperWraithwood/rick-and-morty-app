import React, { useMemo } from "react";

import { useFetchLocationsData } from "../hooks/useFetchLocationsData";
import { TableComponent } from "../components/TableComponent";

function Locations() {
  const { data, isLoading } = useFetchLocationsData();

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
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Dimension",
        accessor: "dimension",
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
      <TableComponent
        columns={columns}
        data={tableData}
        navigation="location"
      />
    </div>
  );
}

export default Locations;
