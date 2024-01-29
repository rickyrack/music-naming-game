import React from "react";
import "./style.scss";
import logo from "../../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import logoutImg from "../../assets/images/logout.png";
import loginImg from "../../assets/images/login.png";
import profileImg from "../../assets/images/profile.png";
import { useAuth } from "../../store/AuthContext";

function Navbar() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <nav>
      <section></section>
      <section className="logo">
        <img src={logo} alt="Beat Boss" width="100%" />
      </section>
      <section className="profile">
        {user && location.pathname === "/profile" ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            <img width="60" height="60" src={logoutImg} alt="logout" />
          </button>
        ) : user ? (
          <button onClick={handleProfile}>
            <img width="70" height="70" src={profileImg} alt="profile" style={{marginRight: "-.4rem"}} />
          </button>
        ) : (
          <button onClick={() => login()}>
            <img width="60" height="60" src={loginImg} alt="login" />
          </button>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
