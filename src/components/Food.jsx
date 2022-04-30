import React from "react";

function Food({ name, image_url }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img src={image_url} alt={name} />
        </div>
      </div>
      <div className="card-title">{name}</div>
    </div>
  );
}

export default Food;
