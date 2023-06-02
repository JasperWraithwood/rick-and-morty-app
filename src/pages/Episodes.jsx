import React, { useMemo } from "react";

import { useTable } from "react-table";
import { Link } from "react-router-dom";

import { useFetchEpisodesData } from "../hooks/useFetchEpisodesData";

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
        Cell: ({ cell }) => (
          <Link to={`/episode/${cell.row.original.id}`}>{cell.value}</Link>
        ),
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

  const tableData = useMemo(() => data?.results ?? [], [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  if (isLoading) return "Loading";

  return (
    <div>
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

export default Episodes;
