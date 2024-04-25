import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const {isAuthenticated, setIsAuthenticated}  = useContext(Context);

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        setIsAuthenticated(false);
        toast.success(res.data.message);
        {console.log("handle logout - logout",isAuthenticated)}
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

 

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {!isAuthenticated ? (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button> 
          ) : (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;