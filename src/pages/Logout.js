import React from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="Page_header">Çıkış yaptınız!</h1>
      <div className="App">Lütfen geri dönün :(</div>
      <p className="App" onClick={() => navigate(-1)}>
        Geri dönmek için tıklayınız
      </p>
    </div>
  );
}

export default Logout;
