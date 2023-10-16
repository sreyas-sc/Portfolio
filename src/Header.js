import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <header className="header header-bg">
      <div className="nav-menu">
        <Link to="/features" className="nav-menu-item">Features</Link>
        <Link to="/pricing" className="nav-menu-item">Pricing</Link>
        <Link to="/templates" className="nav-menu-item">Templates</Link>
        <Link to="/blog" className="nav-menu-item">Blog</Link>
      </div>
    </header>
  );
}

export default Header;
