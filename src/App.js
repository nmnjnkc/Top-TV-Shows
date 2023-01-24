import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { useState, useEffect } from "react";
import { ABOUT_PAGE, DETAILS_PAGE, HOME_PAGE } from "./constants";
import { Switch, Route } from "react-router-dom";
import { ApplicationProvider } from "./context";

function App() {
  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(HOME_PAGE);
  const [currentShow, setCurrentShow] = useState({});
  // const [counter, setCounter] = useState(0)

  // const doFetch = () => {}
  function doFetch() {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) =>
        setShows(
          data.sort((a, b) => b.rating.average - a.rating.average).slice(0, 50)
        )
      );
  }

  console.log(shows);

  useEffect(() => doFetch(), []);

  return (
    // <ApplicationProvider value = {{counter, setCounter}}>
    <ApplicationProvider value={{ shows }}>
      <Switch>
        <Route exact path="/">
          {
            <HomePage
              setCurrentPage={setCurrentPage}
              setCurrentShow={setCurrentShow}
            />
          }
        </Route>

        <Route
          exact
          path="/details/:id"
          render={(props) => {
            const match = props.match;
            return (
              <DetailsPage
                id={match.params.id}
                showz={shows}
                setCurrentPage={setCurrentPage}
                currentShow={currentShow}
              />
            );
          }}
        >
          {/* {<DetailsPage setCurrentPage = {setCurrentPage} currentShow = {currentShow}/>} */}
        </Route>

        <Route exact path="/about">
          {<AboutPage />}
        </Route>

        {/* <div className="App">
      {currentPage === HOME_PAGE && <HomePage shows = {shows} setCurrentPage = {setCurrentPage} setCurrentShow = {setCurrentShow} />}
      {currentPage === DETAILS_PAGE && <DetailsPage  shows = {shows} setCurrentPage = {setCurrentPage} currentShow = {currentShow}/>}
      {currentPage === ABOUT_PAGE && <AboutPage />}
      
    </div> */}
      </Switch>
    </ApplicationProvider>
  );
}

export default App;
