import React from "react";
import "./Pages.css";
import resim from "../resim.jpg";

function Profil() {
  return (
    <div>
      <h1 className="Page_header">Burasi profil!</h1>
      <div className="text">
        Diğer kullanıcıların sizi tanımasına fırsat vermek için burayı
        kullanabilirsiniz.buraya bir resim ekledim:
        <img src={resim} alt="resim" />;
      </div>
    </div>
  );
}

export default Profil;
