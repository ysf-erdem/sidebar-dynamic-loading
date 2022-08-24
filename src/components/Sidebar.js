import { useState, useEffect, lazy, Suspense } from "react";
import {
  IoMdClose,
  IoMdHome,
  IoMdMenu,
  IoMdPerson,
  IoMdListBox,
  IoMdLogOut,
} from "react-icons/io";
import "./Sidebar.css";

function Sidebar() {
  const [LazyComponent, setLazyComponent] = useState(() => () => "");
  const [page, setPage] = useState("Anasayfa");
  useEffect(() => {
    if (page) {
      let path = page;
      const Lzy = lazy(() => import(`../pages/${path}`));
      setLazyComponent(Lzy);
    }
  }, [page]);
  const [active, setActive] = useState(false);
  const activateNav = () => {
    setActive(!active);
  };
  return (
    <div>
      {/* <div className={active ? "sidebar" : "sidebar-small"}> */}

      <div className={`sidebar ${active ? "open" : " "}`}>
        <div className="menu-icon" onClick={activateNav}>
          {!active ? (
            <IoMdMenu className="menu" />
          ) : (
            <IoMdClose className="menu" />
          )}
        </div>
        <ul className={"ul-item"}>
          {/* <ul className={active ? "ul-item" : "ul-item oicon"}> */}
          <li
            className="icon"
            onClick={() => {
              setPage("Anasayfa");
            }}
          >
            <IoMdHome />
            <p onClick={activateNav}>Anasyfa</p>
          </li>
          <li
            className="icon"
            onClick={() => {
              setPage("Profil");
            }}
          >
            <IoMdPerson />
            <p onClick={activateNav}>Profil</p>
          </li>
          <li
            className="icon"
            onClick={() => {
              setPage("Yap");
            }}
          >
            <IoMdListBox />
            <p onClick={activateNav}>Yap</p>
          </li>
          <li onClick={() => window.open("/logout", "_self")}>
            <IoMdLogOut />
            <p onClick={activateNav}>Çıkış</p>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default Sidebar;
