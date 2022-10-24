import { useState } from "react";
import "../assets/CSS/SideNavBar.css";
import { Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
//import DashBoard from "../router/pages/DashBoard";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Login",
      icon: <Icon as={CiLogin} />,
      link: "/login",
    },
    {
      text: "Sign Up",
      icon: "icons/signup.svg",
      link: "/signup",
    },
    {
      text: "About Us",
      icon: "icons/aboutus.svg",
      link: "/about-us",
    },

    {
      text: "Contact Us",
      icon: "icons/contactus.svg",
      link: "/contact-us",
    },
    {
      text: "Donate",
      icon: "icons/donate.svg",
      link: "/donate",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
      link: "/settings",
    },
    {
      text: "Terms",

      link: "/terms",
    },
    {
      text: "Privacy",

      link: "/privacy",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/Logo.svg" alt="" />
              <h2>Menu</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon, link }) => (
            <Link
              key={link}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              to={link}
            >
              <img className="menu-item-icon" src={icon} alt="" />
              {isExpanded && <p>{text}</p>}
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name"> My Menu</p>
              <p className="nav-footer-user-position">Admin</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" />
      </div>
    </div>
  );
};

export default SideNavBar;
