import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DetailsPage.scss";
import { useState, useEffect } from "react";
import CastCard from "../../components/CastCard/CastCard";
import { applicationContext } from "../../context";

const DetailsPage = ({ setCurrentPage, showz, id }) => {
  const [cast, setCast] = useState([]);
  const currentShow = showz.find((e) => e.id == id);
  const { shows } = useContext(applicationContext);

  function getCast() {
    fetch(`https://api.tvmaze.com/shows/${currentShow.id}/cast`)
      .then((res) => res.json())
      .then((data) => setCast(data));
  }

  useEffect(() => getCast(), []);

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <main className="container detailsPage">
        <img src={currentShow?.image.medium} alt="" className="col-4" />

        <div className="col-7">
          <h2>{currentShow?.name}</h2>
          {/* ovo koristimo kada zelimo da u React stavimo nesto sto u sebi vec imaHTML elemente, nikako nista izmedju p tagova */}
          <p dangerouslySetInnerHTML={{ __html: currentShow?.summary }}></p>
        </div>
      </main>

      <div className="actors">
        <CastCard cast={cast} />
      </div>

      <Footer />
    </>
  );
};

export default DetailsPage;
