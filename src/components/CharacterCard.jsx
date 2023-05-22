import React from "react";

function CharacterCard(props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={props.img} alt="character" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.status}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
