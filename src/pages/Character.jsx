import React from "react";

import { useParams } from "react-router-dom";

import { useFetchSinglecharData } from "../hooks/useFetchSinglecharData";
import { InformationField } from "../components/InformationField";
import { useFetchMultipleEpisodesData } from "../hooks/useFetchMultipleEpisodesData";
import { TableComponent } from "../components/TableComponent";

function Character() {
  const { id } = useParams();

  const { data, isLoading } = useFetchSinglecharData(id);

  const locationID = data?.location.url.slice(41);

  const informationFields = data
    ? [
        { title: "Name", value: data.name },
        { title: "Status", value: data.status },
        { title: "Species", value: data.species },
        { title: "Type", value: data.type },
        { title: "Gender", value: data.gender },
        { title: "Origin", value: data.origin.name },
        {
          title: "Location",
          value: data.location.name,
          isLink: true,
          link: `/location/${locationID}`,
        },
      ]
    : [];

  const episodesIDs = data
    ? data.episode.map((url) => {
        return url.slice(40);
      })
    : [];

  const { data: episodesData, isLoading: isEpisodesLoading } =
    useFetchMultipleEpisodesData(episodesIDs);

  const columns = React.useMemo(
    () => [
      {
        Header: "Episode Name",
        accessor: "name",
      },
      {
        Header: "Episode",
        accessor: "episode",
      },
      {
        Header: "Air Date",
        accessor: "air_date",
      },
    ],
    []
  );

  if (isLoading) return "Loading...";

  return (
    <div>
      <div className="hero bg-base bg-opacity-50 backdrop-blur-xl mb-4">
        <div className="hero-content flex-col lg:flex-row">
          {data && (
            <img
              src={data.image}
              alt=""
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          )}
          <div>
            {informationFields.map(
              (field, index) =>
                field.value !== "" && (
                  <InformationField key={index} {...field} />
                )
            )}
          </div>
        </div>
      </div>
      {isEpisodesLoading ? (
        <div>Loading episodes...</div>
      ) : (
        <TableComponent
          columns={columns}
          data={episodesData}
          navigation="episode"
        />
      )}
    </div>
  );
}

export default Character;
