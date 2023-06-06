import React from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";

export const TableComponent = ({ columns, data, navigation }) => {
  const navigate = useNavigate();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleRowClick = (id) => {
    navigate(`/${navigation}/${id}`);
  };

  return (
    <div className="flex flex-col bg-squidblue text-white mb-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 -mb-1">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table
              className="min-w-full text-center text-sm font-light"
              {...getTableProps()}
            >
              <thead className="border-b font-medium dark:border-neutral-500">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="px-6 py-4"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-maximumblue dark:border-neutral-500 dark:hover:bg-neutral-600"
                      {...row.getRowProps()}
                      onClick={() => handleRowClick(row.original.id)}
                    >
                      {row.cells.map((cell) => (
                        <td
                          className="whitespace-nowrap px-6 py-4"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
