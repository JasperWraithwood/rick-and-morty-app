import React from "react";

import { useParams } from "react-router-dom";

import { useFetchSinglecharData } from "../hooks/useFetchSinglecharData";
import { InformationField } from "../components/InformationField";

function Character() {
  const { id } = useParams();

  const { data, isLoading } = useFetchSinglecharData(id);

  if (isLoading) return "Loading";

  const locationID = data.location.url.slice(41);

  const informationFields = [
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
  ];

  return (
    <div>
      <div className="hero bg-base bg-opacity-50 backdrop-blur-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data.image}
            alt=""
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          />
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
    </div>
  );
}

export default Character;
