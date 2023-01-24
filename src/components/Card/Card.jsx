import React, { useContext } from "react";
import { DETAILS_PAGE } from "../../constants";
import "./card.scss";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";

const Card = ({ show, setCurrentPage, setCurrentShow }) => {
  // const {counter, setCounter} = useContext(applicationContext);

  return (
    <>
      {/* <h2>{counter}</h2>
<button onClick ={() => {
  setCounter(counter + 1)
}}>nesto</button>

<button onClick = {() => {
  setCounter(counter - 1)
}}>-</button> */}

      <div
        className="col-6 col-sm-4 col-xl-3 p-3"
        onClick={() => {
          setCurrentPage(DETAILS_PAGE);
          setCurrentShow(show);
        }}
      >
        <Link to={`/details/${show.id}`}>
          <div className="card">
            <img src={show.image.medium} alt="slika" />
            <p className="rating">{show.rating.average}</p>
            <p>{show.name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
