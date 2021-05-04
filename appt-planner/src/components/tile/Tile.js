import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => {
        if (index === 0) {
          return <p className='tile-title' key={index}>{value}</p>
        } else {
          return <p clasName='tile' key={index}>{value}</p>
        }
      })}
    </div>
  );
};
