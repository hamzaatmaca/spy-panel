import React from "react";
import logo from "../../Images/logo.png";

const Navbar = () => {
  //LOGOUT
  const logout = async () => {
    await localStorage.removeItem("spy.token");
    window.location.href = "login";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="navbarLogo" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              {/*  <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ara"
                aria-label="Search"
              />

              <div onClick={logout} className="navLogoutLayout">
                <i className="fa-solid fa-right-from-bracket"></i>
                &nbsp;
                <span>Logout</span>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
