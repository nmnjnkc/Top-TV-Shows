import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./HomePage.scss";
import { useState, useEffect, useContext } from "react";
import Error from "../../components/Error/Error"
import { applicationContext } from "../../context";

const Homepage = ({setCurrentPage, setCurrentShow }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allShows, setAllShows] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const {shows}= useContext(applicationContext);

  function doFetch() {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setAllShows(data));
  }

  useEffect(() => doFetch(), [searchResults]);

  function filterShows(query) {
    if (query) {
      const results = allShows.filter((e) =>
        e.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else setSearchResults([]);
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <input
        type="text"
        placeholder="Search here"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          filterShows(event.target.value);
        }}
      />

      <main className="container homepage">
        <div className="row">
          { searchQuery && !!searchResults.length &&
            searchResults.map((e) => (
              <Card
                setCurrentPage={setCurrentPage}
                setCurrentShow={setCurrentShow}
                show={e}
              />
            ))}

          { !searchQuery && !searchResults.length &&
            shows.map((e) => (
              <Card
                setCurrentPage={setCurrentPage}
                setCurrentShow={setCurrentShow}
                show={e}
              />
            ))}

          { searchQuery && !searchResults.length && 
          <Error />
            }

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
