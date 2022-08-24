import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div>
      <h1 className="Page_header"> Giriş ekranı</h1>
      <div className="App">
        <Link className="Link" to="/home">
          Giriş yapmak için buraya tıklayınız
        </Link>
      </div>
    </div>
  );
}

export default Logout;
