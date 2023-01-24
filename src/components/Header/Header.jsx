import React from "react";
import { ABOUT_PAGE } from "../../constants";
import "./Header.scss";
import {Link} from "react-router-dom";
import { useState } from "react"

const Header = ({setCurrentPage}) => {




  return (
    <header>
      <h1>BIT Shows</h1>
      <Link to = "/">Homepage</Link>
      
      <Link to = "/about">About</Link>
    </header>
  );
};

export default Header;
