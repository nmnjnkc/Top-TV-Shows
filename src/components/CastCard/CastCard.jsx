import React from "react";
import "./CastCard.scss";

const CastCard = ({ cast }) => {
  return (
    <div className="actor">
      {/* ako su viticaste zagrade moramo da pisemo RETURN */}
      {cast.map((e) => {
        return (
          <div>
            <img src={e.person.image.medium} />
            <p>{e.person.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CastCard;
