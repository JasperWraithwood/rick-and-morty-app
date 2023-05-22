import React, { useMemo } from "react";

import { useTable } from "react-table";

import { Link } from "react-router-dom";

import { useFetchLocationsData } from "../hooks/useFetchLocationsData";
import Header from "../components/Header";

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
        Cell: ({ cell }) => (
          <Link to={`/location/${cell.row.original.id}`}>{cell.value}</Link>
        ),
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  if (isLoading) return "Loading";

  return (
    <div>
      <Header />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Locations;
