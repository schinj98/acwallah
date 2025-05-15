import React from "react";
import { useLocation } from "react-router-dom";
import './Header.css';
import profileIcon from './profile.jpg';
import logoHere from './logo.png';

function Header({ isLoggedIn = true, profilePic = profileIcon }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <header className="header">
      <div className="logo">
        <img src={logoHere} alt="ACWallah Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <a href="/" className="nav-item">Home</a>
        <a href="/oldlistedac" className="nav-item">Old AC Listing</a>
        <a href="/pricing" className="nav-item">Pricing</a>
        <a href="/about-us" className="nav-item">About Us</a>

        {(isLoggedIn && isProfilePage) ? (
          <img src={profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <a href="/login" className="login-btn">Login/Signup</a>
        )}
      </nav>
    </header>
  );
}

export default Header;
